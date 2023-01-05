import React, {useState}  from 'react';
import {FaStar} from 'react-icons/fa';

const createArray = length => [...Array(length)];

const Star = ({selected = false, onSelect= f => f}) =>
  (
    <FaStar color = {selected ? 'red':'grey'} onClick={onSelect}/>
  )

export default function StarRaiting({totalStars = 8, style={}, ...props}){
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{...style}} {...props}>
      {createArray(totalStars).map( (n,i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={ () => {setSelectedStars(i+1)}}/>
      ))}
    </div>
  );
}
