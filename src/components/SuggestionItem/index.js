import './index.css'

const SuggsetionItem = props => {
  const {itemsDetails, addSuggestion} = props
  const {suggestion} = itemsDetails

  const onSuggestion = () => {
    addSuggestion(suggestion)
  }

  return (
    <li className="list-item">
      <div className="suggestion-item">
        <p className="paragraph">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
          onClick={onSuggestion}
        />
      </div>
    </li>
  )
}

export default SuggsetionItem
