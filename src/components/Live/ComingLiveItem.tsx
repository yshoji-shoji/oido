import { Live } from '../../types/live';
import { getCostars } from '../../utils/getCostars';
import { getDate } from '../../utils/getDate';

export const ComingLiveItem = ({ live }: { live: Live }) => {
  const date = new Date(live.date);
  const {
    place,
    title,
    open,
    start,
    adv,
    door,
    costar,
    url,
    image,
    drink,
    option,
    tba,
  } = live;

  const charge = () => {
    const chargeArray = [];

    if (door === 0) {
      return 'free';
    }

    if (adv) {
      chargeArray.push(`adv ${adv} / `);
    }
    chargeArray.push(`door ${door}`);
    if (drink) {
      chargeArray.push('（1drink別）');
    }

    return chargeArray.join('');
  };

  return (
    <section>
      <h3>{getDate(date)}</h3>
      <h4>{place}</h4>
      {title && <h5>{title}</h5>}
      {tba ? (
        <p>※詳細未定</p>
      ) : (
        <p>
          {open ? `open ${open} / start ${start}` : `open / start ${start}`}
          <br />
          charge: {charge()}
          {costar && (
            <>
              <br />
              共演: {getCostars(costar)}
            </>
          )}
          {option && (
            <>
              <br />
              {option}
            </>
          )}
        </p>
      )}
      {url && (
        <p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {place}
          </a>
        </p>
      )}
      {image && (
        <picture>
          <source srcSet={image.url} media="(orientation: portrait)" />
          <img src={image.url} alt="" />
        </picture>
      )}
    </section>
  );
};
