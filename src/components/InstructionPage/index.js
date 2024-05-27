import {Link} from 'react-router-dom'
import {FaArrowLeftLong} from 'react-icons/fa6'
import BlueCard from '../BlueCard'

import {
  MainBackgroundContainer,
  MainHeadingLayout,
  MainHeading,
  BackButton,
  ButtonLayout,
} from '../StyledComponents'
import PinkCard from '../PinkCard'
import './index.css'

const InstructionPage = () => (
  <MainBackgroundContainer>
    <Link to="/intro-2">
      <BackButton>
        <FaArrowLeftLong />
      </BackButton>
    </Link>
    <div className="instruction-card-container">
      <div className="instruction-card">
        <div className="card-num card-1">
          <p className="card-count">01</p>
          <div className="card-content">
            <PinkCard />
            <h1 className="main-instructions">Select a pink card.</h1>
          </div>
        </div>
      </div>
      <div className="instruction-card">
        <div className="card-num card-2">
          <p className="card-count">02</p>
          <div className="card-content">
            <BlueCard />

            <h1 className="main-instructions">Select a Blue card.</h1>
          </div>
        </div>
      </div>
      <div className="instruction-card">
        <div className="card-num card-3">
          <p className="card-count">03</p>
          <div className="card-content">
            <div className="card-comb">
              <PinkCard />
              <BlueCard />
            </div>
            <p className="sub-instructions">If they are same</p>
            <h1 className="main-instructions">Its a match!</h1>
            <p className="sub-instructions">else retry again (:</p>
          </div>
        </div>
      </div>
    </div>
    <Link to="/game-start">
      <ButtonLayout type="button">NEXT</ButtonLayout>
    </Link>
  </MainBackgroundContainer>
)

export default InstructionPage
