import Navbar from './components/Nav';
import ItemHistory from './components/ItemHistory';
import ItemData from './components/ItemData';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import getData from './components/getItemData';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;
    setData(null);
    getData("Abyssal Whip").then((result) => {
      if (!ignore) {
        setData(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
      <div className='mt-2 ml-4 mb-6'>
        <Navbar></Navbar>
      </div>
      <div className='grid grid-cols-[auto_1fr] mx-6'>
        <div className='mr-6'>
          <ItemHistory></ItemHistory>
        </div>
        <div className='flex flex-col gap-6 mb-6'>
          <div className='col-start-2'>
            <ItemData data={data}></ItemData>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
