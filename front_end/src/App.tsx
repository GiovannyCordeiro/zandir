// import './App.css'

import Header from "./components/Header/Header"
import ListMovies from "./components/ListMovies/ListMovies"

function App() {

  return (
    <div className='w-full h-screen flex flex-col'>
      <Header />
      <ListMovies />
    </div>
  )
}

export default App
