import {Link} from 'react-router-dom'
import {FaArrowLeftLong} from 'react-icons/fa6'
import {
  MainBackgroundContainer,
  MainHeadingLayout,
  MainHeading,
  BackButton,
  ButtonLayout,
} from '../StyledComponents'
import MonkeyImage from '../MonkeyImage'

const IntroSecondPage = () => (
  <MainBackgroundContainer>
    <Link to="/">
      <BackButton>
        <FaArrowLeftLong />
      </BackButton>
    </Link>
    <MainHeadingLayout>
      <MainHeading>
        Hi , I am Mizo ! <br /> and I love bananas
      </MainHeading>
    </MainHeadingLayout>
    <MonkeyImage />
    <Link to="/intro-2">
      <ButtonLayout type="button">NEXT</ButtonLayout>
    </Link>
  </MainBackgroundContainer>
)

export default IntroSecondPage
