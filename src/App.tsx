import Forcasting from './components/Forcasting'
import Hero from './components/Hero'
import Search from './components/Searching'

import { DataProvider } from './context/useContextProvider'

function App() {

  return (
    <DataProvider>
      <div className="w-full xl:w-4/5 2xl:w-2/3 mx-auto p-2 sm:p-10">
        <Search />
        <Hero />
        <Forcasting />
      </div>
    </DataProvider>
  )
}

export default App
