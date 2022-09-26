import './index.css'

const HistoryItem = props => {
  const {eachitem, clcikedDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachitem

  const button = () => {
    clcikedDelete(id)
  }
  return (
    <li className="history-list">
      <p className="time">{timeAccessed}</p>
      <div className="history-site">
        <div className="logoandsite">
          <img className="site-logo" src={logoUrl} alt="domain logo" />
          <div className="site">
            <p className="site-name">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
        <button
          testId="delete"
          type="submit"
          onClick={button}
          className="delete-icon"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
