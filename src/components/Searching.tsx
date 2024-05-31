import { MapPin, Search } from 'lucide-react'
import { useData } from '../context/useContextProvider'
import { useState } from 'react';

const Searching = () => {

  const { data, fetchData } = useData();
  const [value, setValue] = useState<string>("")

  const handleEnter = (event : any) => {
    if (event.keyCode === 13) {
      fetchData(value);
      setValue("");
    }
  }

  const handleChange = (event : any) => {
    event.preventDefault();
    setValue(event.target.value);
  }

  const onClickSearch = () => {
    fetchData(value);
    setValue("");
  }

  return (
    <section className='flex justify-center items-center flex-col-reverse lg:flex-row lg:justify-between'>
        <div className="text-gray-300 flex items-center">
            <MapPin size={22} className='cursor-pointer'/>
            <p className='px-3 text-xs sm:text-base'>{data?.location.name}, {data?.location.region}, {data?.location.country} </p>
            <p className='text-gray-400 text-xs sm:text-base'>( {data?.location.localtime} )</p>
        </div>
        <div className='flex items-center text-gray-400 my-3 lg:my-0'>
            <Search onClick={onClickSearch}  size={28} strokeWidth={1.5} className='cursor-pointer'/>
            <input onKeyDown={handleEnter} value={value} onChange={handleChange} type="text" className='bg-transparent h-10 glassBackground px-3 outline-none mx-2' />
        </div>
    </section>
  )
}

export default Searching