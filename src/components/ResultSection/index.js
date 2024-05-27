import {
  MainBackgroundContainer,
  ButtonLayout,
} from '../StyledComponents'
import MonkeyImage from '../MonkeyImage'
import './index.css'

const ResultSection = () => (
  <MainBackgroundContainer>
    <h1 className="main-heading">
      Congratulations!,
      <br /> You have won
    </h1>
    <p className="result-score">Score: 100</p>
    <div className="move-img">
      <MonkeyImage />
    </div>
    <div className="move-btn">
      <ButtonLayout> YAY, OK</ButtonLayout>
    </div>
  </MainBackgroundContainer>
)

export default ResultSection
