import React, {useState} from 'react'

const Convert = () => {
    const [dollar, setDollar] = useState("")
    const [naira, setNaira] = useState("")


  const apiURL = 'https://dashboard.encryptbox.co.uk/api/v1/live/getbuyrate';
  const token = '0Coc24mjYhls8bPSZWYKGjVKHeWBhDjgqlqiFK4Hf9FsLN5HTMpRxeJ85pMwGx';
  const handleChange = () =>{

    fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'token': token,
    },
    body: JSON.stringify({
      "amount": dollar, 
      "coin-name": "busd",
    }),
  })
    .then(response => response.json())
    .then(data => {
      const { coin } = data;
      setNaira(coin);
    })
    .catch(error => {
      console.error("Error when calculating", error);
    });
  }
  


return (
  <div className='inp'>
    <div className='nn'>
      <marquee behavior="" direction="">Convert your dollar to naira</marquee>
      <input type="number" value={dollar} onChange={e => setDollar(e.target.value)} />
      <button onClick={handleChange}>Convert</button>
      <p>Naira : {naira}</p>
    </div>
  </div>
);
}


export default Convert