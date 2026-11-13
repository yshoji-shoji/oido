import { Live } from '../../types/live';
import { getCostars } from '../../utils/getCostars';
import { LiveDate } from './LiveDate';

export const PastLiveItem = ({ live }: { live: Live }) => {
  const { place, title, costar, option } = live;
  const details = [title, costar && `共演: ${getCostars(costar)}`]
    .filter(Boolean)
    .join(' · ');

  return (
    <article className="live-row">
      <LiveDate date={live.date} />
      <div className="live-body">
        <h3>{place}</h3>
        {details && <p>{details}</p>}
        {option && (
          <p>
            {option.includes('small:') ? (
              <small>{option.replace('small:', '')}</small>
            ) : (
              option
            )}
          </p>
        )}
      </div>
    </article>
  );
};
