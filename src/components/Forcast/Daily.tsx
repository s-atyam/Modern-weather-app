import { useData } from "../../context/useContextProvider"

const Daily = () => {
    const { data } = useData();

    function getDayOfWeek(dateString: string): string {
        const date = new Date(dateString);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayIndex = date.getDay();
        return days[dayIndex];
    }

    return (
        <div className="w-full h-full flex justify-evenly items-center flex-wrap">
            {data?.forecast.daily.map((ele, index) => (
                <div key={index} className="m-3 lg:m-0 h-4/5 w-64 border glassBackground flex flex-col justify-evenly items-center text-gray-400 min-w-28">
                    <h6>{getDayOfWeek(ele.date)}</h6>
                    <img src={ele.condition.icon} alt="" />
                    <p>{ele.condition.text}</p>
                    <p>{ele.day.maxtemp_c}/{ele.day.mintemp_c}</p>
                </div>
            ))}

        </div>
    )
}

export default Daily