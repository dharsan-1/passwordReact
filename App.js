import {Component} from 'react'
import {v4 as id} from 'uuid'
import ContainerElement from './Components/ContainerElement'
import './App.css'

class App extends Component {
  state = {
    userName: '',
    container: [],
    password: '',
    mail: '',
    onChangeStar: false,
  }

  changeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onchangePass = event => {
    this.setState({password: event.target.value})
  }

  onChangeMail = event => {
    this.setState({mail: event.target.value})
  }

  onsubmitForm = event => {
    event.preventDefault()
    const {userName, password, mail} = this.state
    const newContent = {
      id: id(),
      userName,
      password,
      mail,
    }

    this.setState(prevState => ({
      container: [...prevState.container, newContent],
      userName: '',
      password: '',
      mail: '',
    }))
  }

  onclickchangeStar = () => {
    this.setState(prevState => ({
      onChangeStar: !prevState.onChangeStar,
    }))
  }

  render() {
    const {container, userName, password, mail, onChangeStar} = this.state
    return (
      <div className="primary-Con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="image_logo_ele"
        />
        <div className="first_Con">
          <div className="formCon">
            <form className="form" onSubmit={this.onsubmitForm}>
              <p>Add new password</p>
              <div className="nameCon">
                <div className="nameImgCon">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="web logo"
                    className="web"
                  />
                </div>
                <div className="textname">
                  <input
                    type="text"
                    onChange={this.changeUserName}
                    value={userName}
                    placeholder="enter the name"
                  />
                </div>
              </div>
              <div className="nameCon">
                <div className="nameImgCon">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="web logo"
                    className="web"
                  />
                </div>
                <div className="textname">
                  <input
                    type="password"
                    onChange={this.onchangePass}
                    value={password}
                    placeholder="enter the password"
                  />
                </div>
              </div>
              <div className="nameCon">
                <div className="nameImgCon">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="web logo"
                    className="web"
                  />
                </div>
                <div className="textname">
                  <input
                    type="text"
                    onChange={this.onChangeMail}
                    value={mail}
                    placeholder="enter the website"
                  />
                </div>
              </div>
              <div className="button">
                <button type="submit">add on</button>
              </div>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password magaer"
              className="img-1"
            />
          </div>
        </div>

        <div className="secondary-con">
          <div className="passwordCountSearchCon">
            <h1>
              your passwords <span>{container.length}</span>
            </h1>
            <div>
              <div className="nameImgCon">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="web logo"
                  className="web"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="checkbox">
            <input
              type="checkbox"
              onClick={this.onclickchangeStar}
              id="checkboxIcon"
            />
            <label htmlFor="checkboxIcon">show password</label>
          </div>
          <div className="conCon">
            {container.length === 0 ? (
              <div className="noPassCon">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no password"
                  className="img-1"
                />
                <p className="noPass">no passwords</p>
              </div>
            ) : (
              container.map(eachList => (
                <ContainerElement
                  eachDetails={eachList}
                  key={eachList.id}
                  onclickchangeStar={onChangeStar}
                />
              ))
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
