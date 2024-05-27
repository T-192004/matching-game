import {Link} from 'react-router-dom'
import {FaArrowLeftLong} from 'react-icons/fa6'
import {
  MainBackgroundContainer,
  MainHeadingLayout,
  MainHeading,
  ButtonLayout,
  BackButton,
  CompletionLine,
} from '../StyledComponents'
import MonkeyImage from '../MonkeyImage'

const IntroThirdPage = () => (
  <MainBackgroundContainer>
    <CompletionLine></CompletionLine>
    <Link to="/intro">
      <BackButton>
        <FaArrowLeftLong />
      </BackButton>
    </Link>
    <MainHeadingLayout>
      <MainHeading>Can you help me get some ?</MainHeading>
    </MainHeadingLayout>
    <MonkeyImage />
    <Link to="/instructions">
      <ButtonLayout type="button">YES</ButtonLayout>
    </Link>
  </MainBackgroundContainer>
)

export default IntroThirdPage
