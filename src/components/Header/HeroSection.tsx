import React from 'react';
import styles from './Header.module.css';

const HeroSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <img 
          src="/images/leaf.png" 
          className={`${styles['overlay-image']} ${styles['overlay-1']}`} 
          alt="Лист" 
        />
        <img 
          src="/images/berry.png" 
          className={`${styles['overlay-image']} ${styles['overlay-2']}`} 
          alt="Ягода" 
        />
        <img 
          src="/images/berry.png" 
          className={`${styles['overlay-image']} ${styles['overlay-3']}`} 
          alt="Ягода" 
        />
        <img 
          src="/images/berry.png" 
          className={`${styles['overlay-image']} ${styles['overlay-4']}`} 
          alt="Ягода" 
        />
        
        <div className={styles.hero_text}>
          <button className={`${styles.hero__btn} ${styles.regular_11}`}>
            Вкуснейшие
          </button>
          
          <div className={styles.h1}>
            Пирожные и капкейки <br />от 150 ₽/шт.с доставкой <br />по Санкт Петербургу
          </div>
          
          <div className={styles.regular_24}>
            Приготовим за 3 часа в день заказа.<br />Доставка на авто в холодильнике.
          </div>
          
          <div className={styles.hero__catalog}>
            <button className={`${styles.hero__btn2} ${styles.medium_18}`}>
              Перейти в каталог
            </button>
            
            <div className={`${styles.hero__text} ${styles.regular_15}`}>
              9 различных <br />видов на выбор
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;