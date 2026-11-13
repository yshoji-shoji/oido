import { useVideoData } from '../hooks/useVideoData';
import { YouTube } from './YouTube';

export const Video = () => {
  const { videos } = useVideoData();
  const [latest, ...rest] = videos;

  if (!latest) {
    return null;
  }

  return (
    <>
      <h3>{latest.title}</h3>
      <YouTube videoId={latest.videoId} title={latest.title} />
      {rest.length > 0 && (
        <ul className="video-links">
          {rest.map((video) => (
            <li key={video.videoId}>
              <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {video.title} ↗
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
