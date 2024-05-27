import {Component} from 'react'
import {Link} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import {FaArrowLeftLong} from 'react-icons/fa6'
import {
  MainBackgroundContainer,
  MainHeadingLayout,
  MainHeading,
  BackButton,
} from '../StyledComponents'
import PinkCard from '../PinkCard'
import BlueCard from '../BlueCard'
import './index.css'

const cardsList = [
  {
    name: 'Apple',
    match: 'A',
    id: uuidv4(),
  },
  {
    name: 'Grapes',
    match: 'G',
    id: uuidv4(),
  },
  {
    name: 'Orange',
    match: 'O',
    id: uuidv4(),
  },
  {
    name: 'Banana',
    match: 'B',
    id: uuidv4(),
  },
]

class GameSection extends Component {
  state = {selectedCardListIndex: [], selectedCard: [], score: 0}

  setSelectionCards = () => {
    const {selectedCardListIndex} = this.state
    const randomIndex = Math.floor(Math.random() * cardsList.length)
    console.log(randomIndex)
    const selectedCard = cardsList[randomIndex]
    if (!selectedCardListIndex.includes(randomIndex))
      this.setState(prev => ({
        selectedCardListIndex: [...prev.selectedCardListIndex, randomIndex],
        selectedCard,
      }))
  }

  matchSelectedCards = () => {
    const {selectedCardListIndex, score} = this.state
    const id = Math.floor(Math.random() * cardsList.length)
    const isMatched = selectedCardListIndex.includes(id)
    console.log(isMatched)
    if (isMatched) {
      this.setState(prev => ({score: prev.score + 25}))
    }
    if (score === 100) {
      const {history} = this.props
      history.replace('/result')
    }
  }

  render() {
    const {selectedCardListIndex, score} = this.state
    console.log(selectedCardListIndex.length === 0)
    return (
      <MainBackgroundContainer>
        <Link to="/instructions">
          <BackButton>
            <FaArrowLeftLong />
          </BackButton>
        </Link>
        <h1 className="score">Score: {score}</h1>
        <div className="cards-container">
          <div className="cards-list">
            {cardsList.map(eachCard => (
              <li key={eachCard.id} onClick={this.setSelectionCards}>
                <button className="card-btn">
                  <PinkCard rotate="false" />
                </button>
              </li>
            ))}
          </div>
          <div className="cards-list">
            {cardsList.map(eachCard => (
              <button
                className="card-btn"
                onClick={this.matchSelectedCards}
                key={eachCard.id}
              >
                <BlueCard rotate="false" />
              </button>
            ))}
          </div>
        </div>
      </MainBackgroundContainer>
    )
  }
}

export default GameSection
