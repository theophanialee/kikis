import { useState } from "react";
import { Link, useParams } from "react-router-dom"
import KeychainCustomise from "./KeychainCustomise";


const colors = ['White', 'Yellow', 'Baby Pink', 'Pink', 'Blush Pink', 'Red', 'Dark Purple', 'Light Purple', 'Blue', 'Baby Blue', 'Grey Blue', 'Turqouise', 'Moss Green', 'Pastel Green', 'Grass Green', 'Grey Green'];

export default function KeychainOrder() {
  const { type } = useParams();  
  const [nextSection, setSection] = useState(false);
  
  const [selectedColors, setSelectedColors] = useState([]);

  const handleClick = (id) => {
    // Check if the clicked button is already selected
    const isSelected = selectedColors.includes(id);
  console.log(selectedColors);
    if (isSelected) {
      // If already selected, remove it from the selected colors
      setSelectedColors(selectedColors.filter((colorId) => colorId !== id));
    } else {
      // If not selected, check if the maximum limit is reached
      if (selectedColors.length < 2) {
        // If not reached, add the selected color
        setSelectedColors([...selectedColors, id]);
      } else {
        // If reached, handle the logic for the maximum limit
        // For example, you can display an error message or prevent further selection
        console.log('Maximum limit reached!');
      }
    }
  };

  function handleNext () {
    setSection(true);
  }
  return (
    <>
      <h2>{type}</h2>
      <h3>---Choose 2 colours---</h3>
      <div className="yarnButtonContainer">
        {colors.map((color, id) => (
          <div key={id} className="image-container">
            <button
              className={`yarnButton ${
                selectedColors.includes(id) ? 'selected' : ''
              }`}
              onClick={() => handleClick(id)}
            >
              <img
                src={`/YarnColors/${color}.png`}
                alt={color}
                className="yarn"
              />
              <span className="yarn-text">{color}</span>
            </button>
          </div>
        ))}
      </div>
      <h3>---Keychain type---</h3>
      <div className="yarnButtonContainer">
      <button className="option" >Ring</button>
      <button className="option" >String</button> </div>
      <button onClick={handleNext}>Customise!</button>
    
      
    {nextSection && (
     <KeychainCustomise />)}
    </>
  );
  
  
}
