import { useLiveData } from '../../hooks/useLiveData';
import { processLiveData } from '../../utils/processLiveData';
import { ComingLiveItem } from './ComingLiveItem';
import { PastLiveItem } from './PastLiveItem';

export const Live = () => {
  const { lives } = useLiveData();
  const { pastLives, comingLives } = processLiveData(lives);

  return (
    <>
      <section className="live">
        <h2>Live Schedule</h2>
        {comingLives.map((live) => (
          <ComingLiveItem key={live.id} live={live} />
        ))}
      </section>
      <section className="live past">
        <h2>Past Live</h2>
        {pastLives.map((live) => (
          <PastLiveItem key={live.id} live={live} />
        ))}
      </section>
    </>
  );
};
