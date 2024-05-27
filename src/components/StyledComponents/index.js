import styled from 'styled-components'

export const MainBackgroundContainer = styled.div`
  background-size: cover;
  background-image: url('https://s3-alpha-sig.figma.com/img/fa56/bd65/60c51db815c7b8d80cfda1a8921ca84f?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h9QeR0wRav8FAzc8oxB1pWNSE8IgC4X8qf~VAToqAev7829gKDflVuWV01AYgLx6Qhc~PuLWoPV86t206~D3hie45B0-h4qvpxgTWOSOD3nxM3q-2P4D9RyWiHTgOgG51w8xTuYlxvM~Q0kG~e3Ky3FXjvEVeW98Fq-PMyViUzqthihxZcbYPlpgRiNKMw9n1NWUbuVFtWumVBEe78br~z9O8vl5OdNywG6RLH-Faf4vLtwxjJMKNu1SnmkfYPIuRYLW6y~0FSAgG~EMmEXpD3lRk-YVgYr~9xYjf-G~fP28OqVw2ug2t~Ev1CVqkTdWDy8-1th75KtUd5VmNz62Rw__');
  height: 100vh;
`

export const MainHeadingLayout = styled.div`
  position: relative;
  width: 450.97px;
  height: 150px;
  top: 60px;
  text-align: center;
  left: 869px;
  gap: 0px;
  padding: 8px;
  background-color: #eff8fa;
  border: 0.27px solid #eff8fa;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 80px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 100px;
  box-shadow: 3px 6px 9.7px 0px #68e0f3;
  width: 515.97px;
`

export const MainHeading = styled.div`
  color: #11aec6;
  font-family: 'Nunito';
  font-size: 40px;
  font-weight: 800;
  line-height: 76.38px;
`
export const MonkeyImageLayout = styled.div`
  position: absolute;
  width: 646px;
  height: 630.91px;
  left: 452px;
  top: 150px;
  background-color: transparent;
`
export const ButtonLayout = styled.button`
  position: relative;
  border: 2.01px solid #ffffff;
  width: 150px;
  height: 100px;
  top: 454px;
  left: 1150px;
  gap: 0px;
  border-radius: 40.17px;
  border: 10px solid #ffdf6d;
  background-color: #ffcf25;
  color: #ffffff;
  font-size: 28px;
  font-weight: bolder;
  font-family: 'Nunito';
`
export const BackButton = styled.button`
  position: relative;
  width: 154px;
  height: 94px;
  top: 45px;
  left: 50px;
  gap: 0px;
  border: 11px 0px 0px 0px;
  opacity: 0px;
  background: linear-gradient(180deg, #71be00 0%, #56b000 100%);
  border: 11px solid #ffffff;
  box-shadow: 27px -25px 22.4px 0px #5f8704 inset;
  color: rgba(204, 252, 145, 0.8);
  font-size: 60px;
  border-radius: 4px;
`
export const CompletionLine = styled.div`
  position: relative;
  width: 70%;
  height: 12px;
  top: 13.44px;
  left: 190.43px;
  gap: 0px;
  border-radius: 11.22px;
  opacity: 0px;
  angle: -90.28 deg;
  background: #e2f2f5;
`
export const PinkCardStyle = styled.div`
  min-width: 150px;
  min-height: 221px;
  box-shadow: 3px 4px 9.4px 0px #ebebeb4f;
  color: rgba(255, 94, 142, 0);
  background-image: linear-gradient(
    180deg,
    #fba8c1 0%,
    rgba(251, 168, 193, 0.54) 46%,
    rgba(251, 168, 193, 0.97) 100%
  );
  border: #ebebeb4f solid 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${props =>
    props.rotate ? 'rotate(11.36 deg)' : 'rotate(10 deg)'};
`
export const BlueCardStyle = styled.div`
  min-width: 150px;
  min-height: 221px;
  gap: 0px;
  opacity: 1px;
  background: linear-gradient(
    180deg,
    #a2e3f3 0%,
    rgba(162, 227, 243, 0.29) 46%,
    #a2e3f3 100%
  );
  box-shadow: -4.61px -3.29px 11.73px 0px #ebebeb;
  box-shadow: 1.98px 2.64px 6.19px 0px #ebebeb4f;
  border: #ebebeb4f solid 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${props =>
    props.rotate ? 'rotate(90 deg)' : 'rotate(-18.36 deg)'};
`
