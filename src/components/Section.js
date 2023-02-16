import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
        <ItemText>
              <h1>Model S</h1>
              <p>Order Online for Touchless Dilevery</p>  
          </ItemText>
          <Buttons>
            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
            </ButtonGroup>
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
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`

const Buttons = styled.div`

`

const ButtonGroup = styled.div`
    display: flex;  
    margin-bottom: 30px;
    
`

const LeftButton = styled.div`
    cursor: pointer;    
    background-color: #171a20cc;
    height: 40px;
    width: 256px;
    color: white;
    display: felx;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px
`

const RightButton = styled(LeftButton)`

`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    cursor: pointer;
`