export default function Header(){
  return(
    <>
      <header className="w-screen h-1/6 bg-gray-200 flex items-center justify-center">
        <div className='w-5/6 md:w-4/6 lg:w-3/6'>
          <h2 className="text-2xl font-bold md:text-3xl mb-2">🎥 SEARCH YOUR MOVIE HERE!</h2>
          <p className="text-lg md:text-xl">✅ Search for your favorite movie quickly and easily!</p>
        </div>
      </header>
    </>
  )
}