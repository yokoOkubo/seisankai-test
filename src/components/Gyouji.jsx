import React, { useEffect, useState } from 'react'
import './Gyouji.scss';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import db from '../firebase';

const Gyouji = () => {
  const [gyoujis,setGyouji] = useState([]);

  useEffect(()=>{
    const events =collection(db, "gyouji");
    onSnapshot(events,(snapshot)=> {
      setGyouji(snapshot.docs.map((doc)=>{
        return {...doc.data()};
      }));
    });
  },[]);

  return (
    <div className="gyouji">
      {gyoujis.map((gyouji)=>{
        return (
          <div className="one">
            <h2>{gyouji.title2}</h2>
            <div>日時：{gyouji.title1}</div>
            <div>内容：{gyouji.contents}</div>
          </div>
        );
      })}
    </div>
  );
}
export default Gyouji
