import React from 'react';
import Image from 'next/image';

interface PhotoProps {
  src: string;
  alt: string;
}

const Photo: React.FC<PhotoProps> = ({ src, alt }) => {
  return (
    <Image src={src} alt={alt} className="photo" width={400} height={300} />
  );
};

export default Photo;
