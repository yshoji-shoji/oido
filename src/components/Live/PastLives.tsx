import { Live } from '../../types/live';
import { PastLiveItem } from './PastLiveItem';

const VISIBLE_COUNT = 3;

export const PastLives = ({ lives }: { lives: Live[] }) => {
  const visible = lives.slice(0, VISIBLE_COUNT);
  const hidden = lives.slice(VISIBLE_COUNT);

  return (
    <div>
      {visible.map((live) => (
        <PastLiveItem key={live.id} live={live} />
      ))}
      {hidden.length > 0 && (
        <details className="more">
          <summary>すべて表示（ほか {hidden.length} 件）</summary>
          {hidden.map((live) => (
            <PastLiveItem key={live.id} live={live} />
          ))}
        </details>
      )}
    </div>
  );
};
