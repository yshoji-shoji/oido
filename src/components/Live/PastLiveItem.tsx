import { Live } from '../../types/live';
import { getCostars } from '../../utils/getCostars';
import { getDate } from '../../utils/getDate';

export const PastLiveItem = ({ live }: { live: Live }) => {
  const date = new Date(live.date);
  const { place, costar, option } = live;

  return (
    <section>
      <h3>{getDate(date)}</h3>
      <h4>{place}</h4>
      {costar && <p>共演: {getCostars(costar)}</p>}
      {option && (
        <p>
          {option.includes('small:') ? (
            <small>{option.replace('small:', '')}</small>
          ) : (
            option
          )}
        </p>
      )}
    </section>
  );
};
