
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Spinner from '../Spinner/Spinner'

import { Movie } from '@/types/Movie'
import { MovieResponse } from '@/types/MovieResponse'
import api from '@/services/ApiMovies'
import { useEffect, useState } from 'react'

export default function ListMovies(){

  const [movies, setMovies] = useState<Movie[]>([])
  const [error, setError] = useState<string | null>(null);
  const [yearMovie, setYearMovie] = useState<number>()

  const [inputMovie, setInputMovie] = useState<string>('');
  const [emptyMovie, setEmptyMovie] = useState<boolean>(false);

  const [errorInput, setErrorInput] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  // Pesquisa dos filmes de forma inicial
  const handleFetch = async () => {
    setLoader(true);
    try {
      setEmptyMovie(false);
      const response = await api.get<MovieResponse>('/v1/movies_api');
      setMovies(response.data.movies);
      setLoader(false);
    } catch(error) {
      setError('⚙️🔧 Server error!');
      console.error(error);
      setLoader(false);
    }
  }

  useEffect(() => {
    handleFetch();
  }, [])

  // Pesquisa do filme
  const fetchMovie = async () => {

    if (inputMovie.length === 0){
      setErrorInput(true);
      handleFetch();
      return;
    }
    setErrorInput(false);

    try {
      setLoader(true);
      setError(null);
      
      let response;
      if(yearMovie){
        response = await api.get<MovieResponse>(`/v1/movies_api/search/${inputMovie.toLowerCase()}/${yearMovie}`)
      } else{
        response = await api.get<MovieResponse>(`/v1/movies_api/search/${inputMovie.toLowerCase()}`);
      }

      if (response.data.Error){
        setMovies([]);
        setEmptyMovie(true);
        return;
      }
      setEmptyMovie(false);
      setMovies(response.data.movies);
      setLoader(false);
    } catch(error) {
      setError('⚙️🔧 Server error!');
      console.error(error);
      setLoader(false);
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

  if(error) return <p >{error}</p>

  return(
    <>
      <main className='w-screen h-5/6 flex flex-col items-center justify-center gap-12 '>
        <div className="flex w-5/6 self-center justify-center space-x-2 md:w-4/6 lg:w-3/6">
          <Input className={`rounded-xl h-12 text-base xl:w-3/5`} 
            type="text" 
            onChange={handlerChange} 
            onKeyDown={keyHandler} 
            placeholder={`${errorInput ? 'Please... type your movie here 🤔': 'Type your movie! 😊'}`}
            role="searchInput"
          />
          <Input 
            type="number" 
            className='rounded-xl h-12 w-2/6 xl:w-1/6' 
            placeholder='Year...' 
            onChange={(e) => setYearMovie(parseInt(e.target.value))}
          />
          <Button className='rounded-xl text-base h-12' type="submit" onClick={fetchMovie}>Search!</Button>
        </div>
        {loader && <Spinner />}
        <section className='w-5/6 h-4/6 flex flex-col items-center gap-2 md:w-4/6 lg:w-3/6'>
          {emptyMovie && <p>Sorry, we couldn't find any movie with that name 😭</p>}
          {movies.map((movie) => (
            <Card className='flex h-3/5' key={movie.id_movie}>
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