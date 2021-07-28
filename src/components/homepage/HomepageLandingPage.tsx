import React from 'react';
import './HomepageLandingPage.css';

const HomepageLandingPage = () => {
    // const [bookImgs, setBookImgs] = useState<JSX.Element[]>([]);
    // useEffect(() => {supabase
    // .from('books')
    // .select('id,imageLinks')
    // .then((data) => {
    //     if (data && data.data) {
    //       const arr = [];
    //       for (let i = 0; i < data.data.length; i++) {
    //         //   console.log();
    //         arr.push(<img src={data.data[i].imageLinks[0]} alt="ok" />);
    //       }
    //       setBookImgs(arr);
    //     }
    // })}, [bookImgs]);
    return (
      <section className="w-screen h-screen bg-gray-900">
        <div className="h-full w-full grid grid-rows-1 grid-cols-1 justify-center">
          <div className="row-start-1 col-start-1 flex justify-center">
            <img className="object-contain" src={`${process.env.PUBLIC_URL}/homepage-landscape-bg.png`} alt="ok" />
          </div>
          <div className="h-full w-full row-start-1 col-start-1 bg-opacity-60 bg-black">
            <div className="grid h-full w-full landing-page-container">
              abc
            </div>
          </div>
        </div>
        {/* <div
          className="flex flex-wrap h-full object-contain"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/homepage-landscape-bg.png`,
        }}
        /> */}
      </section>
    );
};

export default HomepageLandingPage;
