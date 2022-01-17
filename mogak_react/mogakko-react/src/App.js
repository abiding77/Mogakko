import React, { useState } from 'react';
import Button from "./Button";
import Multiply from './Multiply';
import styles from './styles/css/App.module.css';

function App() {

  const [number,setNumber] = useState(2);

  function plusClick(){
    setNumber(number+1);
  }
  function minusClick(){
    setNumber(number-1);
  }
  function resetClick(){
    setNumber(0);
  }
  return (
    <div className={styles.container}>
      <Multiply number={number}/>
      <Button className={styles.btn1} onClick={plusClick} text="+1"/>
      <Button className={styles.btn2} onClick={minusClick} text="-1"/>
      <Button className={styles.btn3} onClick={resetClick} text="RESET"/>
    </div>
  );
}
export default App;
