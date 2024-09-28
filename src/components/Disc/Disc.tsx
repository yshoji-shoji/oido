import { useDiskData } from '../../hooks/useDiskData';

export const Disc = () => {
  const { disks } = useDiskData();

  return (
    <>
      <h2>Discography</h2>
      <div>
        {disks.map((disk) => (
          <div key={disk.title}>
            <h3>{disk.title}</h3>
            <div style={{ display: 'flex' }}>
              {disk.image.map((img) => (
                <a href={disk.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={img.url}
                    style={{ width: '45%', marginRight: '2%' }}
                  />
                </a>
              ))}
            </div>

            <div style={{ marginTop: '20px' }}>
              {disk.description?.split('\n').map((item) => (
                <p style={{ margin: '2px' }}>{item}</p>
              ))}
            </div>
            {disk.link && (
              <a href={disk.link} target="_blank" rel="noopener noreferrer">
                詳細を見る
              </a>
            )}
            <div className="video" style={{ marginTop: '10px' }}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${disk.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
