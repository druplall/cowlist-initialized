import React from 'react';

const CowList = function (props) {
  return (
    <div>
      {props.data.apiData.map((item, index) => {
        return (
          <h1
            onClick={(event) => {
              props.click(index);
            }}
            key={index}
          >
            {item.name}
          </h1>
        );
      })}
    </div>
  );
};

export default CowList;
