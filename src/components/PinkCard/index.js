import {FaHeart} from 'react-icons/fa'
import {PinkCardStyle} from '../StyledComponents'
import './index.css'

const PinkCard = () => (
  <div className="pink-border">
    <PinkCardStyle rotate="true">
      <FaHeart className="icon" />
    </PinkCardStyle>
  </div>
)

export default PinkCard
