import { Wind, Droplets, Sun, Compass } from 'lucide-react'
import { useData } from '../context/useContextProvider'

const Hero = () => {
    const { data } = useData();

    return (
        <section className="flex flex-col-reverse md:flex-row m-2 items-center">
            <div className="h-64 lg:h-96 mt-5 w-full lg:w-1/2 flex flex-col">
                <h1 className="text-5xl lg:text-7xl font-extralight my-5 text-gray-300 flex"><img src={data?.current.icon} alt="" className='w-14 lg:w-20' />{data?.current.text}</h1>
                <p className="text-gray-400 w-full lg:w-3/4 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel voluptas ad</p>
            </div>
            <div className="h-64 lg:h-96 mt-5 w-full lg:w-1/2 flex items-center flex-col">
                <h1 className="text-7xl lg:text-9xl font-thin my-5 text-gray-400">{data?.current.temp_c}&deg;C</h1>
                <div className="lg:w-1/2 flex justify-between">
                    <p className=" text-gray-600 text-center px-4 py-2">
                        High
                        <span className="text-gray-500 ml-5 text-lg">{data?.forecast.daily[0].day.maxtemp_c}&deg;C</span>
                    </p>
                    <p className=" text-gray-600 text-center px-4 py-2">
                        Low
                        <span className="text-gray-500 ml-5 text-lg">{data?.forecast.daily[0].day.mintemp_c}&deg;C</span>
                    </p>
                </div>
                <div className="w-full md:w-2/3 flex justify-evenly items-center my-auto">
                    <div className="h-20 w-20  text-gray-400 flex flex-col items-center justify-center">
                        <Wind className='my-2'/>
                        {data?.current.wind_kph} km/h
                    </div>
                    <div className="h-20 w-20  text-gray-400 flex flex-col items-center justify-center">
                        <Droplets className='my-2' />
                        {data?.current.humidity}
                    </div>
                    <div className="h-20 w-20  text-gray-400 flex flex-col items-center justify-center">
                        <Sun  className='my-2'/>
                        {data?.current.uv}
                    </div>
                    <div className="h-20 w-20  text-gray-400 flex flex-col items-center justify-center">
                        <Compass className='my-2' />
                        {data?.current.wind_dir}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero