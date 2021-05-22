export default function ProductCard (props) {
  return (
    <>
      <h4>{props.name}</h4>
      <img src={props.photo_url} alt='props.name'/>
      <p>Description: {props.description}</p>
      <p>$ {props.price}</p>
      <p>Quantity: {props.quantity}</p>
    </>
  )
}
