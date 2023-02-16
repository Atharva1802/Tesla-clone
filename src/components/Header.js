import React from "react"
import styled from "styled-components"


function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>  
      <Menu>
        <a href="#">Model S</a>  
        <a href="#">Model 3</a>  
        <a href="#">Model X</a>  
        <a href="#">Model Y</a>  
        <a href="#">Solar Panels</a>  
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </RightMenu>
      <CustomMenu>
          <a href="#">Menu</a>
      </CustomMenu>
    </Container>
  )
}
export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;  
  top: 0;
  left: 0;
  right: 0;

` 

const Menu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 550;
    padding: 0 20px;
    flex-wrap: nowrap;
  }

  @media(max-width: 758px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 550;
    margin-right: 15px;
  }

    @media(max-width: 758px) {
    display: none;
  }
`

const CustomMenu = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 550;
    flex-wrap: nowrap;
  }


`