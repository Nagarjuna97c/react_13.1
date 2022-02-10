import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {targetCountry: 'India', capital: 'NEW_DELHI'}

  changeCapital = item => {
    const capital = item.target.value
    console.log(item.target.value)
    const {country, id} = countryAndCapitalsList.find(
      eachItem => eachItem.id === capital,
    )
    console.log(country)
    this.setState({targetCountry: country, capital: id})
  }

  render() {
    const {targetCountry, capital} = this.state

    return (
      <div className="main-container">
        <div className="data-container">
          <h1 className="heading">Countries and Capitals</h1>
          <select
            name="capital"
            id="capital"
            onChange={this.changeCapital}
            value={capital}
          >
            {countryAndCapitalsList.map(eachItem => (
              <option key={eachItem.id} value={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>is capital of which country?</p>
          <p className="heading heading1">{targetCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
