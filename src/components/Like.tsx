import { useState } from 'react';
import { random } from '../utils/random';

type Props = {
  filter: () => void;
};

export const Like = ({ filter }: Props) => {
  const [count, setCount] = useState(() => random(1000));

  const handleClick = () => {
    setCount((c) => c + 1);
    filter();
  };

  return (
    <div className="like">
      <button type="button" className="like-button" onClick={handleClick}>
        Love me tender
        <img src="./img/thumbs-up.svg" alt="" />
      </button>
      <output className="like-count">{count} likes</output>
    </div>
  );
};
