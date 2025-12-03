import React from 'react';
import GalleryItem from './GalleryItem';
import { GalleryImage } from '../../types';
import styles from './Gallery.module.css';
import { photos } from '../../assets/images';

const galleryImages: GalleryImage[] = [
  { id: 1, src: photos.photo1, alt: 'Торт 1' },
  { id: 2, src: photos.photo2, alt: 'Торт 2' },
  { id: 3, src: photos.photo3, alt: 'Торт 3' },
  { id: 4, src: photos.photo4, alt: 'Торт 4' },
  { id: 5, src: photos.photo5, alt: 'Торт 5' },
  { id: 6, src: photos.photo6, alt: 'Торт 6' },
  { id: 7, src: photos.photo7, alt: 'Торт 7' },
  { id: 8, src: photos.photo8, alt: 'Торт 8' },
  { id: 9, src: photos.photo9, alt: 'Торт 9' },
];

const Gallery: React.FC = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.container_other}>
        <div className={styles.gallery_title}>
          <p className={styles.h2}>Сделали более 3.000 заказов за 2 года</p>
          <p className={styles.regular_24}>
            Посмотрите фото реальных заказов из нашего instagram
          </p>
        </div>
        <div className={styles.gallery_grid}>
          {galleryImages.map((image) => (
            <GalleryItem key={image.id} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;