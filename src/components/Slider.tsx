import { useState, useEffect, FC } from 'react';
import Slide from './Slide';
// import { ISupplierBook } from '../interfaces/ISupplierBook.interface';

interface ISliderProps {
  entryCount: number;
  entries: {
    title: string;
    authors: string[];
    image: string;
  }[];
}

const Slider: FC<ISliderProps> = ({ entryCount, entries }) => {
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState<any >();
  const delay = 2200;

  useEffect(() => {
    timer && clearTimeout(timer);

    const newTimer = setTimeout(() => {
      const changeIndex = () => {
        if (index === entryCount - 1) return setIndex(0);
        return setIndex((old) => old + 1);
      };
      changeIndex();
    }, delay);
    setTimer(newTimer);
  }, [index]);

  function changeSlide(dir = 0) {
    const newIndex = index + dir;

    if (newIndex >= entryCount) return setIndex(0);
    if (newIndex <= -1) return setIndex(entryCount - 1);

    return setIndex(newIndex);
  }

  return (
    <div className="flex place-content-center">
      <div className="flex flex-col items-center bg-gray-50 p-2 shadow">
        <Slide title={entries[index]?.title} author={entries[index]?.authors?.join(' ')} image={entries[index]?.image} />
        <div className="flex flex-row">
          <button className="flex border shadow-xl text-black-50 p-2 transition-colors duration-200 hover:text-yellow-600" type="button" onClick={() => changeSlide(-1)}> {'<<'} </button>
          <div className="w-80" />
          <button className="flex border shadow-xl text-black-50 p-2 transition-colors duration-200 hover:text-yellow-600" type="button" onClick={() => changeSlide(1)}> {'>>'} </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
