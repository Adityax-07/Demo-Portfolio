import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

import Intro from './sections/Intro';
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';
import SecondVideo from './sections/SecondVideo';
import Lucia from './sections/Lucia';
import Final from './sections/Final';
import Work from './sections/Work';
import GifSection from './sections/GifSection';
import Outro from './sections/Outro';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Recalculate all ScrollTrigger positions after full layout is painted
    const id = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => clearTimeout(id);
  }, []);

  return (
    <main>
      <Intro />
      <NavBar />
      <Hero />

      <FirstVideo />
      <Jason />

      <SecondVideo />
      <Lucia />

<Final />
      <Work />
      <GifSection />
      <Outro />
    </main>
  )
}

export default App