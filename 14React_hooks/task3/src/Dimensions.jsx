import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({ width: null, height: null });

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
    const hendlResize = (e) => {
      const { innerHeight, innerWidth } = e.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };

    window.addEventListener('resize', hendlResize);
    return () => {
      window.removeEventListener('resize', hendlResize);
    };
  }, []);
  const { width, height } = dimensions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};
export default Dimensions;
