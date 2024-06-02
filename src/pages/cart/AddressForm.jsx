import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddressForm() {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save address information to state or localStorage
    navigate('/payment');
  };

  return (
    <div className="flex justify-center my-10">
      <form onSubmit={handleSubmit} className="w-[70%] flex flex-col gap-5">
        <h1 className="text-2xl font-bold mb-5">Address Form</h1>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label>ZIP Code:</label>
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <button type="submit" className="w-full bg-[#9F2089] text-white p-2 rounded mt-5">
          Continue to Payment
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
