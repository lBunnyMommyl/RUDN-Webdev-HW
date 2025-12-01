import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <>
      <div className={styles['bg-header-hero']}>
        <img src="/images/кексики.png" className={`${styles['overlay-image']} ${styles.keks}`} alt="Кексики" />
        <img src="/images/01.png" className={`${styles['overlay-image']} ${styles['overlay-0']}`} alt="Фон" />
        
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.medium_21}>Сладкий сундук</div>
            <div className={styles.header_info}>
              <div className={`${styles.header__location} ${styles.regular_12}`}>
                <img src="/images/location.svg" alt="Локация" />
                г. Санкт-Петербург, <br /> ул. Куйбышева 31
              </div>
              <div className={styles.header__phone}>
                <div className={styles.header__phone_container}>
                  <div className={styles.header__contact_info}></div>
                  <img src="/images/phone.svg" alt="Телефон" />
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
            <img src="/images/leaf.png" className={`${styles['overlay-image']} ${styles['overlay-1']}`} alt="Лист" />
            <img src="/images/berry.png" className={`${styles['overlay-image']} ${styles['overlay-2']}`} alt="Ягода" />
            <img src="/images/berry.png" className={`${styles['overlay-image']} ${styles['overlay-3']}`} alt="Ягода" />
            <img src="/images/berry.png" className={`${styles['overlay-image']} ${styles['overlay-4']}`} alt="Ягода" />
            
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