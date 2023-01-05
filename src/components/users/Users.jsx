import './Users.css'

export default function User({name, username,email,address}){
  return (
    <>
      <h3>{name}</h3>
      <div className="Users-info">
        <h4 className="Users-name"><span>Имя:</span>  {username}</h4>
        <h4 className="Users-email"><span>Email</span> {email}</h4>
        <h5 className="User-address">Адрес:</h5>
        <ul className="User-address">
          <li><span>street</span> {address.city}</li>
          <li><span>city</span> {address.city}</li>
          <li><span>suite</span> {address.suite}</li>
          <li><span>zipcode</span> {address.zipcode}</li>
        </ul>
      </div>
    </>

  );
}
