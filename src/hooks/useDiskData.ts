import { useEffect, useState } from 'react';
import { Disk } from '../types/disk';

type DiskResponse = {
  contents: Disk[];
};

export const useDiskData = () => {
  const [disks, setDisks] = useState<Disk[]>([]);

  const fetchDiskData = async (): Promise<DiskResponse> => {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-MICROCMS-API-KEY': import.meta.env.VITE_API_KEY as string,
    });
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}disc?limit=100`,
      { headers }
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchDiskData().then((data) => {
      setDisks(data.contents ?? []);
    });
  }, []);

  return { disks };
};
