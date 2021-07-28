import React from 'react';
import { Link } from 'react-router-dom';
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
          <nav className="h-full w-full row-start-1 col-start-1 bg-opacity-60 bg-black">
            <div className="grid h-full w-full landing-page-container text-white">
              <div className="col-span-full p-4 flex flex-col md:flex-row justify-between">
                <div className="landing-page-nav-item-container">
                  <span>
                    TODO: &gt; AND HOME NOT PERFECTLY CENTERED
                    <span className="flex flex-row items-center">
                      <span>&gt;</span> <span>Home</span>
                    </span>
                    <hr className="main-underline mt-2" />
                  </span>
                </div>
                <div className="landing-page-nav-item-container">
                  <Link to="/books-list">
                    <span>
                      Check out the book list!
                      <hr className="main-underline mt-2 ml-auto" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
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
