import React from 'react';
import styles from './Header.module.css';

const Contacts: React.FC = () => {
  return (
    <div className={styles.header_info}>
      <div className={`${styles.header__location} ${styles.regular_12}`}>
        <img src="/images/location.svg" alt="Иконка местоположения" />
        г. Санкт-Петербург, <br /> ул. Куйбышева 31
      </div>
      <div className={styles.header__phone}>
        <div className={styles.header__phone_container}>
          <img src="/images/phone.svg" alt="Иконка телефона" />
          <div className={styles.phone__text}>
            <span className={styles.bold_20}>8 (812) 844-95-49</span>
            <span className={styles.regular_13}>
              <br />Ежедневно с 9:00 до 20:00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;