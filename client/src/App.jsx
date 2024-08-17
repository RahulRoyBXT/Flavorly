import React,{useEffect, useState} from "react";
import axios from "axios";
function App() {
  const [message, SetMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/greetings')
   .then(response => {
    SetMessage(response.data.message);

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  },[])
  return (
    <div className='h-[100vh] w-[100vw] bg-zinc-300'>
      <h1>{message}</h1>
    </div>
  );
}

export default App;