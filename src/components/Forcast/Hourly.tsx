import { Area, AreaChart, Tooltip, ResponsiveContainer } from "recharts"
import { useData } from "../../context/useContextProvider";

const CustomLabel = ({ x, y, value }: { x?: number, y?: number, value?: any, index?: number }) => {
    return (
        <text x={x} y={y} dy={-20} fontSize={14} textAnchor="middle" fill="#899991">
            {value}
        </text>
    );
};

const Hourly = () => {
    const { data } = useData();

    function formatTime(dateTimeString: string): string {
        const date = new Date(dateTimeString);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12;

        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

        return `${hours}:${formattedMinutes} ${ampm}`;
    }

    return (
        <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="75%" className="">
                <AreaChart data={data?.forecast.hourly}
                    margin={{ top: 60, right: 20, left: 20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1184d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#1884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    {/* <XAxis  type="number" domain={[1,24]}  /> */}
                    {/* <XAxis  dataKey="name" /> */}
                    {/* <XAxis  dataKey="name" orientation="top"/> */}
                    <Tooltip />
                    <Area type="monotone" label={<CustomLabel />} dataKey="temp_c" stroke="#1884d8" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
            <div className="mx-3 flex justify-between items-center text-gray-400">
                {data?.forecast.hourly.map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={value.condition.icon} alt="" className="w-8 my-3" />
                        <p className="text-sm">{formatTime(value.time)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hourly