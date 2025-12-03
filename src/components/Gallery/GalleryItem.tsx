import React from 'react';
import { GalleryImage } from '../../types';
import styles from './Gallery.module.css';

interface GalleryItemProps {
  image: GalleryImage;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image }) => {
  return (
    <div className={styles.gallery_item}>
      <img 
        src={image.src} 
        alt={image.alt} 
        className={styles.gallery_img} 
      />
    </div>
  );
};

export default GalleryItem;