import { useLiveData } from '../../hooks/useLiveData';
import { processLiveData } from '../../utils/processLiveData';
import { ComingLiveItem } from './ComingLiveItem';

export const Live = () => {
  const { lives } = useLiveData();
  const { comingLives } = processLiveData(lives);

  return (
    <>
      <section className="live">
        <h2>Live Schedule</h2>
        {comingLives.map((live) => (
          <ComingLiveItem key={live.id} live={live} />
        ))}
        {comingLives.length === 0 && <p>しばらくおやすみです</p>}
      </section>
    </>
  );
};
