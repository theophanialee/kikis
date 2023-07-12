import { useState } from "react"
import PaymentInfo from "./PaymentInfo";



export default function Cart(orderDetails) {
  const [delivery,setDelivery] = useState(false);
  const [selectedDeliveryMode, setSelectedDeliveryMode] = useState("");
  const [payment, setPayment] = useState(false);
  const [formData, setFormData] = useState({
  });


  function handleOrder () {
    console.log("submit all orders to airtable")
    setDelivery(true)
  }

  const handleDeliveryModeChange = (e) => {
    setSelectedDeliveryMode(e.target.value);
  };

  function handlePayment(e) {
    e.preventDefault();
// set loading status until submitted, show payment info
setPayment(true);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  function handleSubmit(e){
        //submit to airtable all data (payload: formData + orderData)
        console.log("to airtable");
        const orderData = {
          // orderDetails,
          selectedDeliveryMode,
          formData
        };
        console.log("Submit order data:", orderData);
    e.preventDefault();
  }



  return (
    <>
    <h1>Your orders</h1>
    <h2>OrderDetailsCard</h2>
    <button onClick={handleOrder}>Order now</button>
  
    {delivery && <form>
    <h3>Choose preferred method of delivery</h3>
    <select  value={selectedDeliveryMode} onChange={handleDeliveryModeChange}>
          <option value="">-- Choose delivery mode --</option>
          <option value="Self Collection Bishan MRT (Tuesdays 7:30pm)">Self Collection Bishan MRT (Tuesdays 7:30pm)</option>
          <option value="Self Collection Bishan MRT (Fridays 7:30pm)">Self Collection Bishan MRT (Fridays 7:30pm)</option>
          <option value="Mailed (+$0.50)">Normal mail (+$0.50)</option>
          <option value="Others">Others</option>
        </select>
        {selectedDeliveryMode === "Others" && (
            <>
              <label htmlFor="delilveryOthers">Others:</label>
              <input
  id="delilveryOthers"
  name="delilveryOthers" // Add the name attribute here
  placeholder="e.g Collect at church/office"
  value={formData.others}
  onChange={handleInputChange}
/>
<button onClick={handlePayment}>Payment</button>
            </>
          )}
          {selectedDeliveryMode !== "Others" && (
            <>
              <button onClick={handlePayment}>Payment</button>
            </>
          )}
            {payment && <> 
    <PaymentInfo /> 
    <label>Date of payment</label>
    <input     
    name="paymentDate"
    placeholder="Enter payment date"
    value={formData.paymentDate}
    onChange={handleInputChange}></input>
    <button  onClick={handleSubmit}>Submit</button>
    </>}
    </form>}
  

    </>
  )
}

