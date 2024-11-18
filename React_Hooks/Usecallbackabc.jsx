import React, { useState, useCallback, memo } from 'react';
import '../React_Hooks/style.css'
export default function Usecallbackabc() {
  const [isDark, setIsDark] = useState(false);

  const handleSubmit = useCallback((orderDetails) => {
    post(`/product/123/buy`, {
      referrer: "wizard_of_oz",
      orderDetails,
    });
  }, []);

  function post(url, data) {
    // Simulate a request
    console.log('POST /' + url);
    console.log(data);
  }

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1);

  console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />');
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    };
    onSubmit(orderDetails);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
        <form onSubmit={handleSubmit}>
      <p><b>Note: <code>ShippingForm</code> is artificially slowed down!</b></p>
      <label>
        Number of items:
        <button type="button" className='btn btn-warning' onClick={() => setCount(count - 1)}>–</button>
        {count}
        <button type="button" className='btn btn-danger' onClick={() => setCount(count + 1)}>+</button>
      </label><br /> 
      <label>
        Street:
        <input name="street" />
      </label> <br />
      <label>
        City:
        <input name="city" />
      </label> <br />
      <label>
        Postal code:
        <input name="zipCode" />
      </label><br />
      <button type="submit" className='btn1'>Submit</button>
    </form>
        </div>
      </div>
    </div>
   
  );
});
