import { Footer } from './components/Footer';
import { Like } from './components/Like';
import { Live } from './components/Live';
import { Profile } from './components/Profile';
import './css/style.css';

function App() {
  return (
    <>
      <main>
        <h1>おいど</h1>
        <section>
          <Profile />
          <Live />
          <Like />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
