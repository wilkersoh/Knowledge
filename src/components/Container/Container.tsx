import React from "react";

const Container: React.FC = ({children}) => {
  return (
    <div className='md:container lg:container md:mx-auto border-2 border-rose-500 '>
      {children}
    </div>
  );
};

export default Container;
