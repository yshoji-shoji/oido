import { useCallback, useState } from 'react';
import { Footer } from './components/Footer';
import { Like } from './components/Like';
import { Live } from './components/Live';
import { Profile } from './components/Profile';
import './css/style.css';
import { random } from './utils/random';
import { Disc } from './components/Disc/Disc';
import { Video } from './components/Video';
import { PastLiveItem } from './components/Live/PastLiveItem';
import { useLiveData } from './hooks/useLiveData';
import { processLiveData } from './utils/processLiveData';

const filterPatterns = [
  { filter: 'blur(8px)' },
  { filter: 'contrast(400%)' },
  { filter: 'grayscale(80%)' },
  { filter: 'hue-rotate(90deg)' },
  { filter: 'drop-shadow(16px 16px 20px red) invert(75%)' },
  undefined,
];

function App() {
  const [style, setStyle] = useState<React.CSSProperties | undefined>(
    filterPatterns[random(6)]
  );
  const filter = useCallback(() => {
    setStyle(filterPatterns[random(6)]);
  }, []);
  const { lives } = useLiveData();
  const { pastLives } = processLiveData(lives);

  return (
    <>
      <main>
        <h1>おいど</h1>
        <section>
          <Profile />
          <Live />
          <Disc />
          <Video />
          <section className="live past">
            <h2>Past Live</h2>
            {pastLives.map((live) => (
              <PastLiveItem key={live.id} live={live} />
            ))}
          </section>
          <Like filter={filter} />
        </section>
      </main>
      <Footer style={style} />
    </>
  );
}

export default App;
