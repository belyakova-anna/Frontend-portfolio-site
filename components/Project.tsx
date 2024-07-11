import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectProps {
  name: string;
  link: string;
  technologies: string[];
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  link,
  technologies,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="project">
      <div className="project-content">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </a>

        <div className="technology-container">
          {technologies.map((tech, index) => (
            <div key={index} className="oval">
              {tech}
            </div>
          ))}
        </div>
        <p>{description}</p>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="project-image"
          width={300}
          height={200}
        />
      </a>
    </div>
  );
};

export default Project;
