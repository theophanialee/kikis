import './App.css'
import {Link} from "react-router-dom"

const products = ['Bouquets', 'Keychains', 'Flower Pouch', 'Headphone Sprouts', 'Tulips Airpods Case', 'Mandu','Xiao Long Bao'];
const colors = ['white', 'yellow', 'babyPink', 'pink', 'blushPink', 'darkPurple', 'lightPurple', 'blue', 'babyBlue', 'greyBlue', 'turqouise', 'mossGreen', 'pastelGreen', 'grassGreen', 'greyGreen'];

export default function Order() {
console.log("products: ",products.length);
console.log("colors: ",colors.length);

return (
  <>
    {products.map((product, id) => (
      <Link className="product" to={`/order/${product}`} key={id}>
        <ul>{product}</ul>
      </Link>
    ))}
  </>
);
  
}

