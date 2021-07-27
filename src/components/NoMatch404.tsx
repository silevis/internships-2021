import React from 'react';
import { useLocation } from 'react-router';

const NoMatch404 = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-9xl tracking-wider">404</h1>
      <h3 className="text-3xl">
        No match for path: <code className="font-black">{location.pathname}</code>
      </h3>
    </div>
  );
}

export default NoMatch404;
