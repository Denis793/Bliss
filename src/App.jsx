import { Preloader } from '@components/Preloader';
import { Header } from '@components/Header';
import { Hero } from '@components/Hero';
import { ClientLogo } from '@components/ClientLogo';
import { About } from '@components/About';
import { Services } from '@components/Services';
import { Counter } from '@components/Counter';
import { CTA } from '@components/CTA';
import { Footer } from '@components/Footer';
import { ScrollToTop } from '@components/ScrollToTop';

export const App = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <ClientLogo />
      <About />
      <Services />
      <Counter />
      <CTA />
      <Footer />
      <ScrollToTop />
    </>
  );
};
