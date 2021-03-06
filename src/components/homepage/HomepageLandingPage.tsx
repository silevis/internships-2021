import React from 'react';
import { Link } from 'react-router-dom';
import './HomepageLandingPage.css';

const HomepageLandingPage = () => {
  return (
    <section className="landing-container2 h-screen w-screen bg-gray-900">
      <div className="h-full w-full grid grid-rows-1 grid-cols-1 justify-center">
        <div className="row-start-1 col-start-1 flex justify-center">
          <img className="object-cover w-full h-full" src={`${process.env.PUBLIC_URL}/homepage-landscape-bg.jpg`} alt="ok" />
        </div>
        <div className="h-full w-full row-start-1 col-start-1 bg-opacity-60 bg-black">
          <div className="grid h-full w-full landing-page-container text-white">
            <nav className="col-span-full p-4 flex flex-col md:flex-row justify-between">
              <div className="landing-page-nav-item-container">
                <span>
                  <span className="flex flex-row items-center">
                    <span>Home</span>
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
            </nav>
            <div className="col-start-2 row-start-2 landing-page-grid-item-container">
              <hr className="main-underline" />
              <span className="text-5xl font-bold">SileBooks</span>
            </div>
            <div className="col-start-2 row-start-3 landing-page-grid-item-container">
              <span className="text-3xl font-semibold">Key features</span>
            </div>
            <div className="col-start-2 row-start-4 landing-page-grid-item-container">
              <span className="landing-page-our-features">Quality</span>
            </div>
            <div className="col-start-1 row-start-4 landing-page-grid-item-container">
              <span className="landing-page-our-features">Vast range of books</span>
            </div>
            <div className="col-start-3 row-start-4 landing-page-grid-item-container">
              <span className="landing-page-our-features">Tradition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageLandingPage;
