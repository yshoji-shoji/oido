import { useDiskData } from '../../hooks/useDiskData';
import { YouTube } from '../YouTube';

export const Disc = () => {
  const { disks } = useDiskData();

  return (
    <div className="disc-list">
      {disks.map((disk) => (
        <article key={disk.title} className="disc">
          <div className="disc-jackets">
            {disk.image.map((img) => (
              <img key={img.url} src={img.url} alt={disk.title} />
            ))}
          </div>
          <div className="disc-body">
            <h3>{disk.title}</h3>
            {disk.description?.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            {disk.link && (
              <a
                className="link-button"
                href={disk.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                詳細を見る ↗
              </a>
            )}
          </div>
          {disk.videoId && (
            <div className="disc-video">
              <YouTube videoId={disk.videoId} title={disk.title} />
            </div>
          )}
        </article>
      ))}
    </div>
  );
};
