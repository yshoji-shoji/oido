import { Live } from '../../types/live';
import { getCostars } from '../../utils/getCostars';
import { LiveDate } from './LiveDate';

const charge = ({ adv, door, drink }: Live) => {
  if (door === 0) {
    return 'free';
  }
  const price = adv ? `adv ${adv} / door ${door}` : `door ${door}`;
  return drink ? `${price}（1drink別）` : price;
};

export const ComingLiveItem = ({ live }: { live: Live }) => {
  const { place, title, open, start, costar, url, image, option, tba } = live;

  return (
    <article className="live-row">
      <LiveDate date={live.date} />
      <div className="live-body">
        <h3>{place}</h3>
        {title && <p className="live-title">{title}</p>}
        {tba ? (
          <p>※詳細未定</p>
        ) : (
          <p>
            {open ? `open ${open} / start ${start}` : `open / start ${start}`}
            <br />
            charge: {charge(live)}
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
        {image && <img className="live-flyer" src={image.url} alt="" />}
      </div>
      {url && (
        <a
          className="link-button"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          会場サイト ↗
        </a>
      )}
    </article>
  );
};
