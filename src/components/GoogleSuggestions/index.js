import {Component} from 'react'
import SuggsetionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {putSuggestion: ''}

  addSuggestion = suggestion => {
    this.setState({putSuggestion: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {putSuggestion} = this.state

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google"
          alt="google logo"
        />
        <div className="google-search-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="icon"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input-element"
              value={putSuggestion}
            />
          </div>
          <ul className="ul-type">
            {suggestionsList.map(eachSuggestion => (
              <SuggsetionItem
                itemsDetails={eachSuggestion}
                key={eachSuggestion.id}
                addSuggestion={this.addSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
