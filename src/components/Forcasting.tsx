import { useState } from "react"
import Hourly from "./Forcast/Hourly"
import Daily from "./Forcast/Daily"

const Forcasting = () => {

  const [hourly, setHourly] = useState(true)
  
  const toggleChart = (graph : string) => {
    if (graph==='hourly') {
      setHourly(true);
    }else{
      setHourly(false);
    }
  }

  return (
    <section className="flex flex-col h-96">
      {/* heading section */}
      <div className="flex justify-center sm:justify-between items-center my-2">
        <h1 className="glassBackground text-gray-400 px-3 py-1 hidden sm:block">Forcasting</h1>
        <div className="flex justify-between w-48 px-3 glassBackground text-gray-400">
          <p onClick={()=>{toggleChart('hourly')}} className="p-1 w-1/2 cursor-pointer text-center border-r border-gray-600">Hourly</p>
          <p onClick={()=>{toggleChart('daily')}} className="p-1 w-1/2 cursor-pointer text-center border-gray-600">Daily</p>
        </div>
      </div>
      {hourly? <Hourly/> : <Daily/>}
    </section>
  )
}

export default Forcasting