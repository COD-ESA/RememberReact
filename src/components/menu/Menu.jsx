import Users from '../users/Users'
import StarRaiting from '../StarRaiting/StarRaiting'
import {datas} from '../data/data'
import './Menu.css';

export default function Menu(){
  return(
    <div className="Menu">
      <ol className="Menu-ol">
        {datas.map( el => (<div className="Menu-mapUser">
          <Users key={el.id} {...el}/>
          <StarRaiting
            style={{background:'lime', width: '80%', transform:'translateX(13%)', borderTopLeftRadius:'60%', borderTopRightRadius:'60%'}}
          />
        </div>))}
      </ol>
    </div>
  )
}
