import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

class BrowserHistoryPage extends Component {
  state = {string: '', initialdata: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({initialdata: initialHistoryList})
  }

  changedInput = event => {
    console.log(event.target.value)
    this.setState({string: event.target.value})
  }

  clcikedDelete = id => {
    const {initialdata} = this.state
    const initialHistoryList = initialdata.filter(
      eachitem => eachitem.id !== id,
    )
    this.setState({initialdata: initialHistoryList})
  }

  render() {
    const {initialdata, string} = this.state
    console.log(initialdata)
    const filteredList = initialdata.filter(eachitem =>
      eachitem.title.toLowerCase().includes(string.toLowerCase()),
    )
    return (
      <div className="main">
        <div className="top-container">
          <img
            className="history-icon"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="searchandinput">
            <div className="search-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search-icon"
              />
            </div>
            <div className="input-element">
              <input
                type="search"
                onChange={this.changedInput}
                placeholder="Search history"
              />
            </div>
          </div>
        </div>
        {filteredList.length === 0 ? (
          <p className="no-content">There is no history to show</p>
        ) : (
          <ul className="history-display-container">
            {filteredList.map(eachitem => (
              <HistoryItem
                clcikedDelete={this.clcikedDelete}
                eachitem={eachitem}
                key={eachitem.id}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BrowserHistoryPage
