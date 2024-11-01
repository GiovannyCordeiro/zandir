from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Movies
from .api.serializers import MoviesSerializer

from dotenv import load_dotenv
import requests
import os

load_dotenv()

# Controladores das rotas
@api_view(['GET'])
def get_movies(request):
    if request.method != 'GET':
        return Response(status=status.HTTP_400_BAD_REQUEST)
    movies = Movies.objects.all()
    serilizer = MoviesSerializer(movies, many=True)
    return Response({'data': serilizer.data})

@api_view(['GET'])
def search_movies(request, movie_name):
    try:

        movie = Movies.objects.get(title=movie_name)

        serilizer = MoviesSerializer(movie)
        return Response({'data': serilizer.data})
    except Movies.DoesNotExist:

        data_movie = request_movie(movie_name)
        if data_movie == False:
            return Response({'Error': 'Movie Not found'})

        created_movie = movie_persistence(data_movie)
        serializer = MoviesSerializer(created_movie)

        return Response({'data': serializer.data})


# Lógica referente a requisição da API externa!
def request_movie(movie_name):

    url = f"http://www.omdbapi.com/?t={movie_name}&apikey={os.getenv('API_KEY')}"
    response = requests.get(url)

    if str(response.json()['Response']) == 'False':
        return False

    return response.json()

def movie_persistence(movie_data):
    try:

        new_movie = Movies(
            title=str(movie_data['Title']),
            plot= str(movie_data['Plot']),
            year_realease= str(movie_data['Year']),
            img_url= str(movie_data['Poster'])
        )

        new_movie.full_clean()
        new_movie.save()

        return new_movie

    except:
        return Response({'data': 'Error save movie'})