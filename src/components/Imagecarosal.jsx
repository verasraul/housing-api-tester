import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";
import { useState } from "react";




const Container = styled(Box)({
  width: '100%',
  height:' 100vh',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
})


const Arrow = styled(Box)({
  width: '50px',
  height: '50px',
  backgroundColor: '#fff7f7',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '0',
  bottom:' 0',
  left: `${(props) => props.direction === "left" && "10px"}`,
  right:` ${(props) => props.direction === "right" && "10px"}`,
  margin: 'auto',
  cursor: 'pointer',
  opacity: '0.5',
  zIndex: '2',
})

const Wrapper = styled(Box)({
  height: '100%',
  display: 'flex',
  transition: 'all 1.5s ease',
  transform:` translateX(${(props) => props.slideIndex * -100}vw)`,
})

const Slide = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: `#${(props) => props.bg}`,
})

const ImgContainer = styled(Box)({
  height: '100%',
  flex: '1',
})

const InfoContainer = styled(Box)({
  flex: '1',
  padding: '50px',
})

const Buttons = styled(Button)({
  padding: '10px',
  fontSize: '20px',
  backgroundColor: 'transparent',
  cursor: 'pointer',
})

export default function Imagecarosal(props) {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };
  
    return (
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {props.photo.map((item) => (
            <Slide key={item.id}>
              <ImgContainer>
                <img class="h-4/5" src={item.url} />
              </ImgContainer>
              <InfoContainer> 
                <Buttons>SHOW NOW</Buttons>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    );
}
