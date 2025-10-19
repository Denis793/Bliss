import BrandGrays from '@/assets/img/client-logo/graygrids.svg';
import BrandLine from '@/assets/img/client-logo/lineicons.svg';
import BrandUiDeck from '@/assets/img/client-logo/uideck.svg';
import BrandPageBulb from '@/assets/img/client-logo/pagebulb.svg';
import styles from './ClientLogo.module.scss';

const brandsList = [
  { src: BrandGrays, alt: 'GrayGrids Logo' },
  { src: BrandLine, alt: 'LineIcons Logo' },
  { src: BrandUiDeck, alt: 'UiDeck Logo' },
  { src: BrandPageBulb, alt: 'PageBulb Logo' },
];

export const ClientLogo = () => {
  const animatedBrandsList = [...brandsList, ...brandsList];

  return (
    <section className={styles.brandsSection}>
      <div className="container">
        <div className={styles.sliderTrackWrapper}>
          <div className={styles.sliderTrack}>
            {animatedBrandsList.map((brand, index) => (
              <div key={index} className={styles.singleBrands}>
                <img src={brand.src} alt={brand.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
