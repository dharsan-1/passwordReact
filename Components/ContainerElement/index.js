import './index.css'

const ContainerElement = props => {
  const {eachDetails, onclickchangeStar} = props
  const {userName, password, mail} = eachDetails

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

  return (
    <div className="eachListCon">
      <div>
        <div className="intialName">
          <h1 className="mailFirst">{mailLetter}</h1>
        </div>
        <div className="UsMaPa">
          <h2>{mail}</h2>
          <p>{userName}</p>
          {onChangeSt}
        </div>
      </div>
    </div>
  )
}
export default ContainerElement
