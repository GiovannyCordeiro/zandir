
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

  const [inputMovie, setInputMovie] = useState<string>('');
  const [emptyMovie, setEmptyMovie] = useState<boolean>(false);

  // Pesquisa dos filmes de forma inicial
  const handleFetch = async () => {
    try {
      setEmptyMovie(false);
      const response = await api.get<MovieResponse>('/v1/movies_api');
      setMovies(response.data.movies);
    } catch(error) {
      setError('⚙️🔧 Server error!');
      console.error(error);
    }
  }

  useEffect(() => {
    handleFetch();
  }, [])

  // Pesquisa do filme
  const fetchMovie = async () => {
    try {
      setError(null);
      const response = await api.get<MovieResponse>(`/v1/movies_api/search/${inputMovie.toLowerCase()}`);
      if (response.data.Error){
        setMovies([]);
        setEmptyMovie(true);
        return;
      }
      setEmptyMovie(false);
      setMovies(response.data.movies);
    } catch(error) {
      setError('⚙️🔧 Server error!');
      console.error(error);
    }
  }

  // Atalho para pesquisa
  const handlerChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputMovie(e.target.value)
  }

  const keyHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      fetchMovie();
    }
  }

  if(error) return <p>{error}</p>

  return(
    <>
      <main className='w-screen h-5/6 flex flex-col items-center justify-center gap-12 '>
        <div className="flex w-5/6 max-w-sm self-center space-x-2 ">
          <Input className='rounded-xl' type="text" onChange={handlerChange} onKeyDown={keyHandler} placeholder="Pesquise seu filme aqui😊" />
          <Button className='rounded-xl' type="submit" onClick={fetchMovie}>Pesquisar!</Button>
        </div>
        <section className='w-5/6 h-4/6 flex flex-col gap-2'>
          {emptyMovie && <p>Sorry, we couldn't find any movie with that name 😭</p>}
          {movies.map((movie) => (
            <Card className='flex' key={movie.id_movie}>
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