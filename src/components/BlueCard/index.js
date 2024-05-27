import {FaHeart} from 'react-icons/fa'
import {BlueCardStyle} from '../StyledComponents'
import './index.css'

const BlueCard = () => (
  <div className="blue-border">
    <BlueCardStyle rotate="rotate(-18.36def)">
      <FaHeart className="blue-hear-icon" />
    </BlueCardStyle>
  </div>
)

export default BlueCard
