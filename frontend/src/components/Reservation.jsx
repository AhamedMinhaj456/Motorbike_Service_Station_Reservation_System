import React, { useState , useEffect} from "react";
import './Reservation.css';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


function Reservation() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [motorbikeNumber, setmotorbikeNumber] = useState('');
  const [faultId, setfaultId] = useState('');
  const [service, setService] = useState('');
  const [reservationDate, setreservationDate] = useState('');
  const [reservationTime, setreservationTime] = useState('');
  const [advancePayment, setAdvancePayment] = useState('');
  const customerId = useSelector((state) => state.customers);
  const shopId = useSelector((state) => state.shops);
  const handleSubmit = (e) => {
    e.preventDefault();
    saveData();

    console.log('Reservation submitted:', { motorbikeNumber, faultId, service, reservationDate, reservationTime, advancePayment});
  };



  const [serviceDropdownOptions, setServiceDropdownOptions] = useState([]);
  // const [companySelectedOption, setCompanySelectedOption] = useState('');

   // Function to handle dropdown change
  
   const serviceDropdownChange = (e) => {
    setService(e.target.value);
  };

   // Function to save data to the database
  
   const saveData = async () => {
    try {
      const response = await fetch('http://localhost:8095/reservation/addReservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          
          faultId,
          service,
          reservationDate,
          reservationTime,
          customerId,
          shopId,
          motorbikeNumber,
          advancePayment
        }),
      });
      const data = await response.json();
      alert('Data saved successfully:', data);
      navigate('/Shops');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Fetch dropdown options from the database
  {

    useEffect(() => {
      const fetchServiceDropdownOptions = async () => {
        try {
          const response = await fetch('http://localhost:8096/serviceType/serviceType');
          const data = await response.json();
          const dropdownOptions = data.map((serviceType) => serviceType.serviceType);
          setServiceDropdownOptions(dropdownOptions);
        } catch (error) {
          console.error('Error fetching dropdown options:', error);
        }
      };
  
      fetchServiceDropdownOptions();
    }, []);
  }
  return (

    <div className="resrvation-content">

      <div className="reservation-container">
        <h2 className="reservation-title">Online Reservation</h2>
         {/* <div className="reservation-title">
            <h2>Current Customer ID: {customerId || "None"}</h2>
        </div>
        <div className="reservation-title">
            <h2>Current Shop ID: {shopId || "None"}</h2>
        </div> */}
        <form onSubmit={handleSubmit} className="reservation-form">
    
          {/* <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} /> */}
          <input type="text" placeholder="Bike Number" value={motorbikeNumber} onChange={(e) => setmotorbikeNumber(e.target.value)} />
          {/* <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} /> */}
          <input type="text"  placeholder="Fault" value={faultId} onChange={(e) => setfaultId(e.target.value)} required />
          <select
           value={service} required
          onChange={serviceDropdownChange}
          className="dropdown-select"
        >
          <option value="">Service Type</option>
          {serviceDropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
          {/* <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select Service Type</option>
            <option value="Repair">Repair</option>
            <option value="Maintenance">Maintenance</option>
          </select> */}
          <input type="date" value={reservationDate} onChange={(e) => setreservationDate(e.target.value)} />
          <input type="time" step="1" value={reservationTime} onChange={(e) => setreservationTime(e.target.value)} />
          <input type="text"  placeholder="Advanced Payment" value={advancePayment} onChange={(e) => setAdvancePayment(e.target.value)} required />
          <button type="submit">Submit Reservation</button>
        </form>
      </div>

    </div>

  );

}
export default Reservation;
