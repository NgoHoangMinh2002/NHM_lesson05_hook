import React from 'react';
import NhmUseState from './Components/Nhm_UseState';
import Nhm_useEffect from './Components/Nhm_UseEffect';
import Nhm_useContext from './Components/Nhm_useContext';


export default function App() {
  return (
    <div className="container border mt-3">
      <h1 className="text-center">Ngo Hoang Minh-Hook</h1>
      <hr />
      <NhmUseState />
      <hr />
      <Nhm_useEffect />
      <hr/>
      <Nhm_useContext/>
    </div>
  );
}
