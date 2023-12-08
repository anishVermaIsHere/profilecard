import {  useState, useEffect,useId } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

const App=()=>{
  const [data, setData]=useState([]);
  const url='https://randomuser.me/api/?page=1&results=1&seed=abc';
  const uid=useId();
  const getData=()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setData(data.results))
    .catch(error=>console.log('Error occured',error));
  }


  useEffect(()=>{
    getData();
  },[]);

  return (
    <>
     <main className=''>
      <h2 className='text-2xl font-bold text-white text-center mb-5'>Profile Card</h2>
      <p className=' text-white text-center mb-20'>Assignment | Cryptonet Technologies Private Limited</p>
      <div className='flex justify-center'>
        {data.map(card=><Card key={uid} card={card}/>)}
      </div>
     </main>
     <footer className='fixed left-0 right-0 bottom-0 w-full p-4 bg-gray-800'>
        <div className='text-center text-sm text-white'>Copyright {new Date().getFullYear()} | Designed by Anish Verma</div>
     </footer>
    </>
  )
}

export default App
