import { useVideoData } from '../hooks/useVideoData';

export const Video = () => {
  const { videos } = useVideoData();

  console.log(videos);

  return (
    <section>
      <div>
        <h2>Video</h2>
        {videos.map((video) => (
          <div>
            <h3>{video.title}</h3>
            <div className="video">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
