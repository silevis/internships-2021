import { useState, useEffect, FC } from 'react';
import Slide from './Slide';

interface ISliderProps {
  entryCount: number;
  entries: {
    id: string;
    title: string;
    authors: string[];
    image: string;
    votesAmount: number;
    avgRating:number;
  }[];
}

const Slider: FC<ISliderProps> = ({ entryCount, entries }) => {
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line
  const [timer, setTimer] = useState<any>();
  const delay = 2200;

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      const changeIndex = () => {
        if (index === entryCount - 1) return setIndex(0);
        return setIndex((old) => old + 1);
      };
      changeIndex();
    }, delay);
    setTimer(newTimer);
    // eslint-disable-next-line
  }, [index]);

  const changeSlide = (dir = 0) => {
    const newIndex = index + dir;

    if (newIndex >= entryCount) return setIndex(0);
    if (newIndex <= -1) return setIndex(entryCount - 1);

    return setIndex(newIndex);
  };

  return (
    <div className="flex mt-2 ml-6">
      <div className="flex flex-col items-center bg-gray-50 shadow p-2">
        <Slide
          id={entries[index]?.id}
          title={entries[index]?.title}
          author={entries[index]?.authors?.join(' ')}
          image={entries[index]?.image}
          votesAmount={entries[index]?.votesAmount}
          avgRating={entries[index]?.avgRating}
        />
        <div className="flex flex-row">
          <button
            className="btn-page px-2"
            type="button"
            onClick={() => changeSlide(-1)}
          >
            ⮜
          </button>
          <div className="w-80" />
          <button
            className="btn-page px-2"
            type="button"
            onClick={() => changeSlide(1)}
          >
            ⮞
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
