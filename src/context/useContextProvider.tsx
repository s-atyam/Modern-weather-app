import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getData, Data } from '../api/api';

interface DataContextType {
  data: Data | null;
  loading: boolean;
  error: string | null;
  fetchData: (value:string) => void;
}

const defaultValue: DataContextType = {
  data: null,
  loading: false,
  error: null,
  fetchData: () => {},
};

const DataContext = createContext<DataContextType>(defaultValue);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (location: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getData(location);
      setData(data);
    } catch (err:any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("Delhi India")
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within an DataProvider');
  }
  return context;
};
