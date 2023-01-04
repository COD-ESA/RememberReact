import React, {useState}  from 'react';
import {FaStar} from 'react-icons/fa';

const createArray = length => [...Array(length)];

const Star = ({selected = false}) =>
  (
    <FaStar color = {selected ? 'red':'grey'}/>
  )

export default function StarRaiting({totalStars = 8}){
  const [selectedStars] = useState(3);
  return (
    <>
      {createArray(totalStars).map( (n,i ) => (
        <Star key={i} selected={selectedStars > i}/>
      ))}
    </>
  );
}
