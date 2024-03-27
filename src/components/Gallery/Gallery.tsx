import { FC, useState } from 'react';
import { images } from './images';

type TypeIndex = number;

export const Gallery: FC = () => {
  const [index, setIndex] = useState<TypeIndex>(0);

  let hasNext = index < images.length - 1;

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    }
  };

  const handlePrevClick = () => {
    if (typeof hasNext === 'boolean') {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  let image = images[index];

  return (
    <>
      {index > 0 && (
        <>
          <button onClick={handleNextClick}>Next</button>
          <button onClick={handlePrevClick}>Prev</button>
          <h3>
            Image {index + 1} of {images.length}
          </h3>
          <img src={image.src} alt='gallery application' />
          <p>{image.place}</p>
        </>
      )}
      {index === 0 && (
        <>
          <button onClick={handleNextClick}>Next</button>
          <h3>
            Image {index + 1} of {images.length}
          </h3>
          <img src={image.src} alt='gallery application' />
          <p>{image.place}</p>
        </>
      )}
    </>
  );
};
