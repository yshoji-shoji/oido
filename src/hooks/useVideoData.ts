import { useEffect, useState } from 'react';
import { Video } from '../types/video';

type VideoResponse = {
  contents: Video[];
};

export const useVideoData = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const fetchVideoData = async (): Promise<VideoResponse> => {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-MICROCMS-API-KEY': import.meta.env.VITE_API_KEY as string,
    });
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}video?limit=4`,
      {
        headers,
      }
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchVideoData().then((data) => {
      setVideos(data.contents);
    });
  }, []);

  return { videos };
};
