import React from 'react';
import styles from './Catalog.module.css';

interface CounterProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

const Counter: React.FC<CounterProps> = ({ quantity, onChange }) => {
  const increment = () => onChange(quantity + 1);
  const decrement = () => onChange(Math.max(0, quantity - 1));

  return (
    <div className={styles.counter}>
      <button 
        className={styles.counter_button} 
        onClick={decrement}
        aria-label="Уменьшить количество"
        type="button"
      >
        -
      </button>
      <span className={styles.counter_value}>{quantity}</span>
      <button 
        className={styles.counter_button} 
        onClick={increment}
        aria-label="Увеличить количество"
        type="button"
      >
        +
      </button>
    </div>
  );
};

export default Counter;