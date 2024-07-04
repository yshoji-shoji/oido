import { useEffect, useState } from 'react';
import { Live } from '../types/live';

type LiveResponse = {
  contents: Live[];
};

export const useLiveData = () => {
  const [lives, setLives] = useState<Live[]>([]);

  const fetchLiveData = async (): Promise<LiveResponse> => {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-MICROCMS-API-KEY': import.meta.env.VITE_API_KEY as string,
    });
    const response = await fetch(`${import.meta.env.VITE_API_URL}live`, {
      headers,
    });
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchLiveData().then((data) => {
      setLives(data.contents);
    });
  }, []);

  return { lives };
};
