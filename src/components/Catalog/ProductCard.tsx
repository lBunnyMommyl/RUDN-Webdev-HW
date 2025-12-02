import React, { useState } from 'react';
import { Product } from '../../types';
import Counter from './Counter';
import styles from './Catalog.module.css';
import { cards } from '../../assets/images';

const cardMap: Record<string, string> = {
  'card-1.jpg': cards.card1,
  'card-2.jpg': cards.card2,
  'card-3.jpg': cards.card3,
  'card-4.jpg': cards.card4,
  'card-5.jpg': cards.card5,
  'card-6.jpg': cards.card6,
  'card-7.jpg': cards.card7,
  'card-8.jpg': cards.card8,
  'card-9.jpg': cards.card9,
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showCounter, setShowCounter] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleOrderClick = () => {
    setShowCounter(true);
    setQuantity(1);
  };

  const handleCounterChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    if (newQuantity === 0) {
      setShowCounter(false);
    }
  };

  const totalPrice = quantity * product.price;
  const imageSrc = cardMap[product.image] || cards.card1;

  return (
    <div className={styles.card}>
      <img 
        src={imageSrc} 
        alt={product.name} 
        className={styles.card_img} 
      />
      <div className={styles.card_content}>
        <div className={styles.card_text}>
          <div className={styles.bold_24}>{product.name}</div>
          <div className={styles.regular_16}>{product.description}</div>
        </div>
        <div className={styles.card_Cost_button}>
          <div className={styles.price_container}>
            <div className={styles.medium_24}>{product.price} ₽/шт.</div>
            {showCounter && (
              <div className={styles.counter_total_small}>
                Итого: {totalPrice} ₽
              </div>
            )}
          </div>
          <div className={styles.action_container}>
            {showCounter ? (
              <Counter
                quantity={quantity}
                onChange={handleCounterChange}
              />
            ) : (
              <button 
                className={`${styles.card_button} ${styles.medium_18}`} 
                onClick={handleOrderClick}
              >
                Заказать
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;