import './index.css'

const ContainerElement = props => {
  const {eachDetails, onclickchangeStar, onDeleting} = props
  const {userName, password, mail, id} = eachDetails

  const mailLetter = mail[0].toUpperCase()
  console.log(onclickchangeStar)
  const onChangeSt = onclickchangeStar ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="starImg"
    />
  ) : (
    <h4>{password}</h4>
  )
  const uuid = id

  const onclickDelete = () => {
    onDeleting(uuid)
  }

  return (
    <li className="eachListCon">
      <div>
        <h1 className="mailFirst">{mailLetter}</h1>
      </div>
      <div className="UsMaPa">
        <h2>{mail}</h2>
        <p>{userName}</p>
        {onChangeSt}
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        alt="delete"
        className="deleteImg"
        onClick={onclickDelete}
      />
    </li>
  )
}
export default ContainerElement
