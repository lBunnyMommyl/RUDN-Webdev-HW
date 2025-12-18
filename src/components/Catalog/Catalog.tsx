import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types';
import styles from './Catalog.module.css';
import { decorative } from '../../assets/images';

const products: Product[] = [
  { id: 1, name: 'Кремовый замок', description: 'Нежный крем любого цвета на выбор, вафельная основа', price: 150, image: 'card-1.jpg' },
  { id: 2, name: 'Малиновый рай', description: 'Воздушный крем, темная основа и ягода малины', price: 150, image: 'card-2.jpg' },
  { id: 3, name: 'Фейерверк', description: 'Разноцветные крем, с бисквитной основой', price: 150, image: 'card-3.jpg' },
  { id: 4, name: 'Шоколадный мир', description: 'Ореховая стружка, нежный крем и шоколадная основа', price: 150, image: 'card-4.jpg' },
  { id: 5, name: 'Слезы дракона', description: 'Нежный крем любого цвета на выбор, вафельная основа', price: 150, image: 'card-5.jpg' },
  { id: 6, name: 'Летняя фантазия', description: 'Украшения в форме сердец, для любимого человека', price: 150, image: 'card-6.jpg' },
  { id: 7, name: 'Мыс безумия', description: 'Разноцветная основа, стружка и нежный крем', price: 150, image: 'card-7.jpg' },
  { id: 8, name: 'Облачная сказка', description: 'Светлая основа, нежный крем со стружкой сверху', price: 150, image: 'card-8.jpg' },
  { id: 9, name: 'Темный рыцарь', description: 'Тёмная основа, нежный крем и вкусные шарики', price: 150, image: 'card-9.jpg' },
];

const decorativeImages = [
  { id: 1, src: decorative.berry, className: styles['overlay-5'], alt: 'Ягода' },
  { id: 2, src: decorative.leaf, className: styles['overlay-6'], alt: 'Лист' },
  { id: 3, src: decorative.leaf, className: styles['overlay-7'], alt: 'Лист' },
];

const Catalog: React.FC = () => {
  return (
    <div className={styles.catalog_section}>
      <div className={styles.container}>
        <div className={`${styles.catalog_title} ${styles.h2}`}>
          Для любых событий и дорогих вам людей
        </div>
        <div className={styles.catalog_container}>
          {decorativeImages.map((img) => (
            <img 
              key={img.id}
              src={img.src} 
              className={`${styles['overlay-image']} ${img.className}`} 
              alt={img.alt} 
            />
          ))}
          
          <div className={styles.catalog}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;