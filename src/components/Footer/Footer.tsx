import React from 'react';
import styles from './Footer.module.css';
import { decorative, icons } from '../../assets/images';

const Footer: React.FC = () => {
  const decorativeImages = [
    { id: 1, src: decorative.cloud, className: styles['overlay-8'], alt: 'Облако' },
    { id: 2, src: decorative.leaf, className: styles['overlay-12'], alt: 'Лист' },
    { id: 3, src: decorative.leaf, className: styles['overlay-13'], alt: 'Лист' },
    { id: 4, src: decorative.berry, className: styles['overlay-14'], alt: 'Ягода' },
    { id: 5, src: decorative.berry, className: styles['overlay-15'], alt: 'Ягода' },
  ];

  const links = [
    { id: 1, text: 'Согласие на обработку данных' },
    { id: 2, text: 'Служба поддержки' },
    { id: 3, text: 'Политика конфиденциальности' },
  ];

  return (
    <>
      <div className={styles.contacts}>
        {decorativeImages.map((img) => (
          <img 
            key={img.id}
            src={img.src} 
            className={`${styles['overlay-image']} ${img.className}`} 
            alt={img.alt} 
          />
        ))}

        <div className={styles.container_other}>
          <div className={styles.contacts_content}>
            <div className={styles.contacts_card}>
              <p className={styles.bold_36}>Чтобы сделать заказ, укажите ваш телефон</p>
              <p className={styles.regular_21}>
                Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания
              </p>
              <div className={styles.contacts_card_checkbox}>
                <button className={`${styles.contacts__btn} ${styles.regular_15} ${styles.contacts__text}`}>
                  <img src={icons.phone2} className={styles.btn_icon} alt="Телефон" />
                  <span>Номер телефона</span>
                </button>
                <button className={`${styles.contacts__btn2} ${styles.medium_18}`}>
                  Сделать заказ
                </button>
              </div>
              <div className={styles.contacts__aprove}>
                <img src={icons.approve} className={styles.btn_aprove} alt="Галочка" />
                <span className={styles.regular_11}>
                  Нажатая на кнопку, вы соглашаетесь с <u>условиями обработки персональных данных</u>
                </span>
              </div>
            </div>
            <div className={styles.contacts_links}>
              <div className={styles.links_row}>
                {links.map((link) => (
                  <p key={link.id}>{link.text}</p>
                ))}
              </div>
              <div className={styles.links_row}>
                <p>© nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 00000000000001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;