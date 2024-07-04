import { Live } from '../types/live';

export const processLiveData = (data: Live[]) => {
  const currentTime = new Date().getTime();

  const sortedData = data.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const pastLives = sortedData
    .filter((live) => {
      return new Date(live.date).getTime() < currentTime;
    })
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  const comingLives = sortedData.filter((live) => {
    return new Date(live.date).getTime() >= currentTime;
  });

  return { pastLives, comingLives };
};
