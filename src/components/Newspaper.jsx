import React, { useEffect, useState } from 'react'
import "./Newspaper.scss"
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../firebase';

const Newspaper = () => {
  const [papers, setPaper] = useState([]);

  useEffect(()=> {
    const dayori = collection(db, "dayori");
    onSnapshot(dayori,(snapshot)=>{
      setPaper(snapshot.docs.map((doc)=> {
        return {...doc.data()};
      }))
    });


  },[]);
  return (
    <div className="newspaper">
      {papers.map((paper) => (
        <div className="titles" key={paper.title}>
          <a href={paper.url} target="_blank" className="one">
            {paper.title}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Newspaper