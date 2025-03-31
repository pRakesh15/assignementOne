import { useState } from "react";
import Grid from "./Components/Grid";
import "./App.css";

export default function App() {
  const [order, setOrder] = useState([]);
//create a 3x3 matrix for the box this is dynamic.
  const matrix = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];

  //here i create a func for deActive the box in the manner i active the box 
  const deactivateCells = () => {
    //create a time interval by which we can see the flow
    const timer = setInterval(() => {
      setOrder((originOrder) => {
        const newOrder = originOrder.slice();
        //use sift for removing the index from the start like by which manner we insert ..
        newOrder.shift();

//we can use pop also for removing the elements in reverse order..
        // newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
        }
        return newOrder;
      });
    }, 100);
  };

  //create a empty array and push the index to it what are active in the order...

  const activatedCells = (index) => {
    //push the index in to the  order array
    const newOrder = [...order, index];
    setOrder(newOrder);

    //when the boxes are full i have to remove all the clicked box..
    //for that i call the function
    //here i use flat for convert 2D matrix in to 1D matrix..
    if (newOrder.length === matrix.flat().filter(Boolean).length) {
      deactivateCells();
    }
  };

  return (
    <div className="App">
      <div
        className="grid"
       
      >
      {/*  by using map display the boxes.. 
        by using include method i check the index is available in the order array or not 
        */}
        {matrix
          .flat()
          .map((value, index) =>
            value ? (
              
              <Grid
                key={index}
                filled={order.includes(index)}  
                onClick={() => activatedCells(index)}
                isDisabled={order.includes(index)}
              />
            ) : (
              <span key={index} />
            )
          )}
      </div>
    </div>
  );
}
