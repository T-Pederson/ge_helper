import Navbar from './components/Nav';
import ItemHistory from './components/ItemHistory';
import ItemData from './components/ItemData';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import getData from './components/getItemData';
import './App.css';

function App() {
  const emptyData = {
    "name": "",
    "itemID": "",
    "buyPrice": 0,
    "sellPrice": 0,
    "margin": 0,
    "ROI": 0,
    "limit": 0,
    "highAlch": 0,
    "lowAlch": 0,
    "examine": "",
    "members": "",
    "icon": ""
  }

  const [data, setData] = useState(emptyData);
  const [itemHistory, setItemHistory] = useState(JSON.parse(localStorage.getItem("itemHistory")));

  useEffect(() => {
    setData(emptyData);
    if (itemHistory !== null) {
      getData(itemHistory[0].name).then((result) => setData(result));
    } else {
      getData("Abyssal whip").then((result) => setData(result))
    }
  }, []);

  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
      <div className='mt-2 ml-4 mb-6'>
        <Navbar setData={setData} emptyData={emptyData} setItemHistory={setItemHistory}></Navbar>
      </div>
      <div className='grid grid-cols-[auto_1fr] mx-6'>
        <div className='mr-6'>
          <ItemHistory setData={setData} emptyData={emptyData} itemHistory={itemHistory} setItemHistory={setItemHistory}></ItemHistory>
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
