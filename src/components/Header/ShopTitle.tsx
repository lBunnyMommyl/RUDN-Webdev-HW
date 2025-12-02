import React from 'react';
import styles from './Header.module.css';

const ShopTitle: React.FC<{ shopName: string }> = ({ shopName }) => {
  return (
    <div className={styles.medium_21}>{shopName}</div>
  );
};

export default ShopTitle;