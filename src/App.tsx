import { useCallback, useState } from 'react';
import { Disc } from './components/Disc/Disc';
import { Footer } from './components/Footer';
import { Like } from './components/Like';
import { Live, PastLives } from './components/Live';
import { Profile } from './components/Profile';
import { Section } from './components/Section';
import { Video } from './components/Video';
import { useLiveData } from './hooks/useLiveData';
import { processLiveData } from './utils/processLiveData';
import { random } from './utils/random';

const filterPatterns = [
  { filter: 'blur(8px)' },
  { filter: 'contrast(400%)' },
  { filter: 'grayscale(80%)' },
  { filter: 'hue-rotate(90deg)' },
  { filter: 'drop-shadow(16px 16px 20px red) invert(75%)' },
  undefined,
];

const NAV = [
  { id: 'live', label: 'ライブ' },
  { id: 'profile', label: 'プロフィール' },
  { id: 'disc', label: '作品' },
  { id: 'video', label: '映像' },
  { id: 'past', label: 'これまで' },
];

function App() {
  const [style, setStyle] = useState<React.CSSProperties | undefined>(
    filterPatterns[random(filterPatterns.length)]
  );
  const filter = useCallback(() => {
    setStyle(filterPatterns[random(filterPatterns.length)]);
  }, []);
  const { lives } = useLiveData();
  const { comingLives, pastLives } = processLiveData(lives);

  return (
    <>
      <main className="container">
        <header className="hero">
          <h1 className="logo">おいど</h1>
          <figure className="hero-figure">
            <img src="./img/sea.jpg" alt="" />
            <figcaption>oido is a band. — since autumn 2023</figcaption>
          </figure>
        </header>

        <nav className="nav" aria-label="ページ内リンク">
          {NAV.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <Section id="live" label="Live">
          <Live lives={comingLives} />
        </Section>
        <Section id="profile" label="Profile">
          <Profile />
        </Section>
        <Section id="disc" label="Discography">
          <Disc />
        </Section>
        <Section id="video" label="Video">
          <Video />
        </Section>
        <Section id="past" label="Past Live">
          <PastLives lives={pastLives} />
        </Section>

        <Like filter={filter} />
      </main>
      <Footer style={style} />
    </>
  );
}

export default App;
