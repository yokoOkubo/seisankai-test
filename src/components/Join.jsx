import React, { useEffect, useState } from 'react'
import "./Join.scss"
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../firebase';

const Join = () => {
  const [joins, setJoins] = useState([]);

  useEffect(() => {
    const events = collection(db, 'join_us');
    onSnapshot(events, (snapshot) => {
      setJoins(
        snapshot.docs.map((doc) => {
          //doc.data()で受け取ったオブジェクトの各フィールドをばらしてオブジェクトを作成
          return { ...doc.data() };
        })
      );
    });
  }, []);

  return (
    <div className="join">
      {joins.map((join) => {
        return (
          <div className="one">
            <h2>{join.title}</h2>
            <div>内容：{join.contents}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Join