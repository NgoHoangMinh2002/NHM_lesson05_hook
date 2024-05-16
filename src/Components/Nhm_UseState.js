import React, { useState } from 'react';

export default function NhmUseState() {
  const [count, setCount] = useState(0);
  //Mảng
  const [list , setlist]= useState([]);
  const NhmHandleList = ()=>{
    let num = parseInt(Math.random()*100);
    //Cap nhat lai State:list
    setlist([
      ...list,
      num
    ])
    // let lst = list.push(num);
    // setlist(list);
  }
  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>
        Bấm tôi
      </button>
      <hr/>
      <h3>List: {list.toString()}</h3>
      <button onClick={NhmHandleList}>Them Ngau nhien</button>
    </div>
  );
}
