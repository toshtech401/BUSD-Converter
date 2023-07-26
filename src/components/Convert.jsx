import React, {useState} from 'react'
import axios from 'axios'

const Convert = () => {
  const [dollar, setDollar] = useState ("")
    const [naira, setNaira] = useState("")

    const handleChange = () =>{
      const baseURL = 'https://dashboard.encryptbox.co.uk/api/v1/live/getbuyrate'
      const token = '0Coc24mjYhls8bPSZWYKGjVKHeWBhDjgqlqiFK4Hf9FsLN5HTMpRxeJ85pMwGx'


      axios.post(baseURL, {
        "amount" :"busdAmount",
        "coin-name": "busd"
      }, {
        headers: {
          token: token
        },
      })
      .then(response =>{
        const {coin} = response.data;
        setNaira(coin)
      })
      .catch(error =>{
        console.error("Error when calculating", error)
      })
    };
  return (
    <div className='inp'>
        <div className='nn'>
        <input type="number" value={dollar} onChange={e => setDollar(e.target.value)}/>
        <button onClick={handleChange}>Convert</button>
        <p>Naira: {naira}</p>
        </div>
    </div>
  )
}

export default Convert