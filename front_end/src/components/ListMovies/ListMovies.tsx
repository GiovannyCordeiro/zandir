
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Movie } from '@/types/Movie'
import { MovieResponse } from '@/types/MovieResponse'
import api from '@/services/ApiMovies'
import { useEffect, useState } from 'react'

export default function ListMovies(){

  const [movies, setMovies] = useState<Movie[]>([])
  const [error, setError] = useState<string | null>(null);

  const handleFetch = async () => {
    try {
      const response = await api.get<MovieResponse>('/v1/movies_api');
      setMovies(response.data.movies);
    } catch(error) {
      setError('Erro ao carregar os filmes!');
      console.error(error);
    }
  }

  useEffect(() => {
    handleFetch();
  }, [])

  if(error) return <p>{error}</p>

  return(
    <>
      <main className='w-screen h-5/6 flex flex-col items-center justify-center gap-12 '>
        <div className="flex w-5/6 max-w-sm self-center space-x-2 ">
          <Input className='rounded-xl' type="text" placeholder="Pesquise seu filme aqui😊" />
          <Button className='rounded-xl' type="submit">Pesquisar!</Button>
        </div>
        <section className='w-5/6 h-4/6 flex flex-col gap-2'>
          {movies.map((movie) => (
            <Card className='flex'>
              <div className='w-2/6 rounded-xl bg-gray-300'>
                <img className='w-full h-full rounded-xl' src={movie.img_url} alt={`Movie Picture ${movie.title}`} />
              </div>
              <div className='w-4/6'>
                <CardHeader>
                  <CardTitle>{movie.title}</CardTitle>
                  <CardDescription>Release Date: {movie.year_realease}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{movie.plot}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </section>
      </main>
    </>
  )
}