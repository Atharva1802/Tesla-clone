import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {

  return (
      <Wrap bgImage={backgroundImg}>
          <Fade bottom>
              <ItemText>
              <h1> {title} </h1>
              <p>{ description }</p>   
              </ItemText>
          </Fade>

          <Buttons>
              <Fade big>
                  
            <ButtonGroup>
                <LeftButton>
                    { leftBtnText }
                  </LeftButton>
                  {rightBtnText && 
                    <RightButton>
                        { rightBtnText }
                    </RightButton>
                  }
            </ButtonGroup>
                  </Fade>
            <DownArrow src = "/images/down-arrow.svg" />
          </Buttons>
    </Wrap>
  )
}
export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url('/images/model-s.jpg');
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`

const Buttons = styled.div`
    overflow-y: hidden;

`

const ButtonGroup = styled.div`
    
    display: flex;  
    margin-bottom: 30px;
    @media (max-width: 920px) { 
        flex-direction: column;
    }
    
`

const LeftButton = styled.div`
    cursor: pointer;    
    background-color: #171a20;
    height: 40px;
    width: 256px;
    color: white;
    display: felx;
    justify-content: center;
    margin: 8px;
    align-items: center;
    border-radius: 5px;
    opacity: 0.85;
    // text-transform: uppercase;
    font-size: 16px

    
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    cursor: pointer;
    animation: animateDown infinite 1.5s;
`

