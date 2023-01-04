import StarRaiting from '../star/Star'
import {datas} from '../data/data'
import './Users.css'

export default function User(){
  return (
    <ol className="Users-ol">
      {datas.map( (el,i) => (
        <div className="mapUser" key={i}>
          <h3>{el.name}</h3>
          <div className="Users-info">
            <h4 className="Users-name">Имя:  &nbsp; &nbsp;{el.username}</h4>
            <h4 className="Users-email">email:  &nbsp;{el.email}</h4>
            <h5 className="User-address">Адрес:</h5>
            <ul className="User-address"> <address></address>
              <li>street &nbsp;{el['address'].city}</li>
              <li>city &nbsp;{el['address'].city}</li>
              <li>suite &nbsp;{el['address'].suite}</li>
              <li>zipcode &nbsp;{el['address'].zipcode}</li>
            </ul>
          </div>
          <StarRaiting/>
        </div>
      ))}
    </ol>
  );
}
