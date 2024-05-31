import api from './apiService';

interface hourlyData {
  condition: {
    text:string,
    icon: string
  },
  temp_c:number,
  temp_f:number,
  time: string
}

interface dailyData {
  date: string,
  condition: {
    text:string,
    icon: string
  },
  day : {
    maxtemp_c: number,
    maxtemp_f: number,
    mintemp_c: number,
    mintemp_f: number,
    avgtemp_c: number,
    avgtemp_f: number,
  }
}

export interface Data {
  location: {
    name: string,
    region: string,
    country: string,
    localtime: string
  },
  current: {
    text:string,
    icon: string
    temp_c:number,
    temp_f:number,
    wind_kph:number,
    wind_dir:string,
    humidity:number,
    uv:number
  },
  forecast:{
    hourly: hourlyData[],
    daily: dailyData[]
  }
}

export const getData = async (location : string): Promise<any> => {
  // api route for forecasting
  let route = `/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=3&aqi=no&alerts=no`

  const response = await api.get(route);

  // daily forecast
  const daily:dailyData[] = [];
  response.data?.forecast?.forecastday?.forEach((element:any) => {
    daily.push({
      date:(element?.date as string),
      day: {
        maxtemp_c: element?.day?.maxtemp_c,
        maxtemp_f: element?.day?.maxtemp_f,
        mintemp_c: element?.day?.mintemp_c,
        mintemp_f: element?.day?.mintemp_f,
        avgtemp_c: element?.day?.avgtemp_c,
        avgtemp_f: element?.day?.avgtemp_f,
      },
      condition: {
        text: element?.day?.condition?.text,
        icon: element?.day?.condition?.icon,
      }
    })
  });

  const hourly:hourlyData[] = [];
  let flag = false;
  response.data?.forecast?.forecastday[0]?.hour.forEach((element:any)=>{
    if(flag){
      hourly.push({
        condition: {
          text: element?.condition?.text,
          icon: element?.condition?.icon
        },
        time: element?.time,
        temp_c: element?.temp_c,
        temp_f: element?.temp_f
      })
      flag=false
    }else{
      flag=true
    }
  })

  const data:Data = {
    location: {
      name: response.data?.location?.name,
      region: response.data?.location?.region,
      country: response.data?.location?.country,
      localtime: response.data?.location?.localtime,
    },
    current: {
      humidity: response.data?.current?.humidity,
      icon: response.data?.current?.condition?.icon,
      text: response.data?.current?.condition?.text,
      temp_c: response.data?.current?.temp_c,
      temp_f: response.data?.current?.temp_f,
      uv: response.data?.current?.uv,
      wind_dir: response.data?.current?.wind_dir,
      wind_kph: response.data?.current?.wind_kph,
    },
    forecast: {
      hourly: hourly,
      daily: daily
    }
  }

  return data;
};
