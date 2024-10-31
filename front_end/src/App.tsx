// import './App.css'

import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {

  return (
    <div className='w-full h-screen flex flex-col'>
      <header className="w-screen h-1/6 bg-gray-600 flex items-center justify-center">
        <div className='w-5/6 '>
          <h2>FILMES Lorem Ipsum</h2>
          <p>descrição Lorem ipsum dolor</p>
        </div>
      </header>
      <main className='w-screen h-5/6 flex flex-col items-center justify-center gap-12 '>
        <div className="flex w-5/6 max-w-sm self-center space-x-2 ">
          <Input className='rounded-xl' type="text" placeholder="Pesquise seu filme aqui😊" />
          <Button className='rounded-xl' type="submit">Pesquisar!</Button>
        </div>
        <section className='w-5/6 h-4/6 flex flex-col gap-2'>
          <Card className='flex'>
            <div className='w-2/6 rounded-xl bg-gray-300'></div>
            <div>
              <CardHeader>
                <CardTitle>Filme X</CardTitle>
                <CardDescription>Genero x</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Pequeno sumario</p>
              </CardContent>
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}

export default App
