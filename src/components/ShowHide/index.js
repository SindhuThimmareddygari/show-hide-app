import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstNameVisible: false, isLastNameVisible: false}

  firstName = () => {
    this.setState(prevState => ({
      isLastNameVisible: !prevState.isLastNameVisible,
    }))
  }

  secondName = () => {
    this.setState(prevState => ({
      isFirstNameVisible: !prevState.isFirstNameVisible,
    }))
  }

  render() {
    const {isFirstNameVisible, isLastNameVisible} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              onClick={this.secondName}
              className="show-hide-button"
            >
              Show/Hide Firstname
            </button>
            {isFirstNameVisible && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              onClick={this.firstName}
              className="show-hide-button"
            >
              Show/Hide Lastname
            </button>
            {isLastNameVisible && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
