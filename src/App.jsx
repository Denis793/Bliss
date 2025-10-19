import { Preloader } from '@/shared/ui/Preloader';
import { Header } from '@/shared/layout/Header';
import { Hero } from '@/widgets//Hero';
import { ClientLogo } from '@/widgets/ClientLogo';
import { About } from '@/widgets/About';
import { Services } from '@/widgets/Services';
import { Counter } from '@/widgets/Counter';
import { CTA } from '@/widgets/CTA';
import { Footer } from '@/shared/layout/Footer';
import { ScrollToTop } from '@/shared/ui/ScrollToTop';

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
