import React, {useState}  from 'react';
import {FaStar} from 'react-icons/fa';
import './StarRaiting.css';

const createArray = length => [...Array(length)];

const Star = ({selected = false, onSelect= f => f}) =>
  (
    <FaStar color = {selected ? 'red':'grey'} onClick={onSelect} />
  )

export default function StarRaiting({totalStars = 12}){
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div className="StarRaiting">
      {createArray(totalStars).map( (n,i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={ () => {setSelectedStars(i+1)} }
        />
      ))}
    </div>
  );
}
