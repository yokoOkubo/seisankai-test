import React, { useEffect, useState } from 'react'
import "./Exercise.scss"
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../firebase';

const Exercise = () => {
  const [exercises, setExercise] = useState([]);

  useEffect(()=> {
    const taisou = collection(db,"exercises");
    onSnapshot(taisou, (snapshot) => {
      setExercise(
        snapshot.docs.map((doc)=>{
          return{...doc.data()};
        })
      );
    });
  },[]);

  return (
    <div className="exercises">
      {exercises.map((exercise) => {
        return (
          <div className="one">
            <h2>{exercise.place}</h2>
            <div>日時：{exercise.date}</div>
            <div>内容：{exercise.contents}</div>
          </div>
        );
      })}
    </div>
  )
}

export default Exercise