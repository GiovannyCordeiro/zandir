from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Movies
from .api.serializers import MoviesSerializer


@api_view(['GET'])
def get_movies(request):
    if request.method != 'GET':
        return Response(status=status.HTTP_400_BAD_REQUEST)
    movies = Movies.objects.all()
    serilizer = MoviesSerializer(movies, many=True)
    return Response({'hello': serilizer.data})
