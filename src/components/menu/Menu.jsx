import { useState } from 'react';
import Users from '../users/Users'
import StarRaiting from '../StarRaiting/StarRaiting'
import {datas} from '../data/data'
import './Menu.css';

export default function Menu({title}){
  const [DataUser, setDataUser] = useState(datas);
  const deleteMapUser = delete_id => {
    const newDataUser = DataUser.filter( el => el.id !== delete_id);
    setDataUser(newDataUser);
  }
  return(
    <div className="Menu">
      <h2>{title}</h2>
      <ol className="Menu-ol">

        {DataUser.map( (el) => (
          <div key={el.id} className="Menu-mapUser">
            <Users  {...el} myIdClick={deleteMapUser}/>
            <StarRaiting/>
          </div>))}

      </ol>
    </div>
  )
}
