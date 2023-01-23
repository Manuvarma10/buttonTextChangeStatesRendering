import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {value: false}

  onButton = () => {
    this.setState(prevState => ({value: !prevState.value}))
  }

  getButtonText = () => {
    const {value} = this.state
    return value ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thankyou! Happy Learning</p>
        <button onClick={this.onButton} className="button1" type="button">
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
