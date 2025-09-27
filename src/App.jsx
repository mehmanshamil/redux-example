// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, specailIncrement } from "./assets/Redux/features/Counter/CounterSlice";

// const App = () => {
//// dispatch slicedeki funksiyalari isletmek ucundu
//   const dispatch = useDispatch();

// selector-secici useSelector initialState(baslangic deyeri) deyeri goturmek ucundur
//   const { value } = useSelector((state) => state.count);

//   return (
//     <div>
//       <button onClick={() => dispatch(increment())}>Artir</button>
//       <div>{value}</div>
//       <button onClick={() => dispatch(decrement())}>Azalt</button>
//       <button onClick={() => dispatch(specailIncrement(5))}>Xususi artim</button>
//     </div>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import RecipeReviewCard from "./assets/Components/Box/Box";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getApiProducts } from "./assets/Redux/features/Product/ProductSlice";
import Variants from "./assets/Components/LoadingBox/LoadingBox";

const App = () => {
  const dispatch = useDispatch();
  let { data } = useSelector((state) => state.products);
  let { loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getApiProducts());
  }, []);

  return (
    <div  
      style={{
        width: "87%",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent:"space-evenly",
        gap: "10px",
      }}
    >
      {loading
        ? data.map((item, index) => <Variants key={index} />)
        : data &&
          data.map((item) => <RecipeReviewCard key={item.id} item={item} />)}
    </div>
  );
};

export default App;
