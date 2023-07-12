import { Link } from "react-router-dom"

const types = ["Forget Me Not", "Daisies", "Lily of the Valley", "Puff Daisy", "Sunflower"]

export default function Keychains() {

  return (
    <>
    <h1>Keychains</h1>
    {types.map((type,id) => <div key={id}><Link to={`/order/Keychains/${type}`}>{type}</Link></div>)}
    </>
  )
}

