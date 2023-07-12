import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function KeychainCustomise() {
  const [yes, Yes] = useState(false)
  const [no, setNo] = useState(false)
  const [next, setNext] = useState(false);
  const navigate = useNavigate();


  function handleCustomise() {
    console.log(yes)
    Yes(true)
  }

  function handleNext () {  
    console.log(no)
    setNo(true)
  }

  function handleAddToCart () {
    //submit details here
   console.log("add to cart")
    setNext(true)
    navigate("/cart"); // Navigate to the /cart route
  }
  
  return (
    <>

      <h2>---Do you want to customise your charm?---</h2>
      <h3><i>[Add name]</i></h3>
      <div className="yarnButtonContainer">
      <button className="option" onClick={handleCustomise} disabled={no}>Yes</button>
      <button className="option" onClick={handleNext} disabled={yes}>No</button></div>
      {yes && <> <input placeholder="Enter your name" ></input> <button onClick={handleAddToCart}>Add to cart</button></>}
      {no && <button onClick={handleAddToCart}>Add to cart</button>}
  
    </>
  );
  
  
}
