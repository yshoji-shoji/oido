import { getDate, getWeekday } from '../../utils/getDate';

export const LiveDate = ({ date }: { date: Date }) => {
  const d = new Date(date);

  return (
    <time className="live-date" dateTime={d.toISOString()}>
      {getDate(d)}
      <small>{getWeekday(d)}</small>
    </time>
  );
};
