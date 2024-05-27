import {Link} from 'react-router-dom'
import {
  MainBackgroundContainer,
  MainHeadingLayout,
  MainHeading,
  ButtonLayout,
} from '../StyledComponents'
import MonkeyImage from '../MonkeyImage'

const IntroFirstPage = () => (
  <MainBackgroundContainer>
    <MainHeadingLayout>
      <MainHeading>Welcome Kiddo</MainHeading>
    </MainHeadingLayout>
    <MonkeyImage />
    <Link to="/intro">
      <ButtonLayout type="button">START</ButtonLayout>{' '}
    </Link>
  </MainBackgroundContainer>
)

export default IntroFirstPage
