import React from 'react';
import styles from './Header.module.css';
import { decorative, icons } from '../../assets/images';

const Header: React.FC = () => {
  const decorativeImages = [
    { id: 1, src: decorative.keks, className: styles.keks, alt: 'Кексики' },
    { id: 2, src: decorative.overlay01, className: styles['overlay-0'], alt: 'Фон' },
    { id: 3, src: decorative.leaf, className: styles['overlay-1'], alt: 'Лист' },
    { id: 4, src: decorative.berry, className: styles['overlay-2'], alt: 'Ягода' },
    { id: 5, src: decorative.berry, className: styles['overlay-3'], alt: 'Ягода' },
    { id: 6, src: decorative.berry, className: styles['overlay-4'], alt: 'Ягода' },
  ];

  return (
    <>
      <div className={styles['bg-header-hero']} style={{ backgroundImage: `url(${decorative.bg})` }}>
        {decorativeImages.map((img) => (
          <img
            key={img.id}
            src={img.src}
            className={`${styles['overlay-image']} ${img.className}`}
            alt={img.alt}
          />
        ))}
        
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.medium_21}>Сладкий сундук</div>
            <div className={styles.header_info}>
              <div className={`${styles.header__location} ${styles.regular_12}`}>
                <img src={icons.location} alt="Локация" />
                г. Санкт-Петербург, <br /> ул. Куйбышева 31
              </div>
              <div className={styles.header__phone}>
                <div className={styles.header__phone_container}>
                  <div className={styles.header__contact_info}></div>
                  <img src={icons.phone} alt="Телефон" />
                  <div className={styles.phone__text}>
                    <span className={styles.bold_20}>8 (812) 844-95-49</span>
                    <span className={styles.regular_13}>
                      <br />Ежедневно с 9:00 до 20:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.horizontal_line} />

        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.hero_text}>
              <button className={`${styles.hero__btn} ${styles.regular_11}`}>Вкуснейшие</button>
              <div className={styles.h1}>
                Пирожные и капкейки <br /> от 150 ₽/шт. с доставкой <br /> по Санкт-Петербургу
              </div>
              <div className={styles.regular_24}>
                Приготовим за 3 часа в день заказа.<br /> Доставка на авто в холодильнике.
              </div>
              <div className={styles.hero__catalog}>
                <button className={`${styles.hero__btn2} ${styles.medium_18}`}>Перейти в каталог</button>
                <div className={`${styles.hero__text} ${styles.regular_15}`}>
                  9 различных <br /> видов на выбор
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;