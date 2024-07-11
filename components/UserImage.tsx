import React from 'react';
import Image from 'next/image';

interface UserImageProps {
  src: string;
  alt: string;
}

const UserImage: React.FC<UserImageProps> = ({ src, alt }) => {
  return (
    <div className="image">
      <Image src={src} alt={alt} width={300} height={300} priority={true} />
    </div>
  );
};

export default UserImage;
