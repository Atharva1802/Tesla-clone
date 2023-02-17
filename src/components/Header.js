import React from "react"
import styled from "styled-components"
import CloseIcon from '@material-ui/icons/Close'

function Header() {
  return (
    <Container>
      <a href="#">
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
      <NavMenu>
        <CustomClose>

        </CustomClose>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
      </NavMenu>
    </Container>
  )
}
export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 1;
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

  @media(max-width: 920px) {
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

    @media(max-width: 920px) {
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

const NavMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right:0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  // display: flex;
  flex-direction: cloumn;
  text-align: start;
  li { 
    padding: 15px 0;
    border-bottom: 1px solid #00000033;

    a {
      font-weight: 600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  
`