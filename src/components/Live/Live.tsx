import { Live as LiveType } from '../../types/live';
import { ComingLiveItem } from './ComingLiveItem';

export const Live = ({ lives }: { lives: LiveType[] }) => (
  <div>
    {lives.map((live) => (
      <ComingLiveItem key={live.id} live={live} />
    ))}
    {lives.length === 0 && <p>しばらくおやすみです</p>}
  </div>
);
