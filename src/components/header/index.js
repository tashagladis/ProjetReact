import React from 'react'

import styled from 'styled-components'
import HeaderLogout from '../headerLogout'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <div>
        
          <NavTop>
            <div>
            <Image
           src="https://cloudinary-res.cloudinary.com/image/upload/v1521663307/MiniFlix-Logo_620x180.png" alt="Netflix" width="112" height="28"
        ></Image>
            </div>
            <Div>NetFlix</Div>
            <div>
            </div>
          </NavTop>
          <div>
            <Header_links to='/home'> Home  </Header_links>
            <Header_links to='/favorite'> Ma liste </Header_links>
            <Header_links to='/search'> Rechercher </Header_links>
        </div>
          <div></div>
        </div>
      </Navigation>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background-color: red;
`
const Navigation = styled.nav`
  height: 50px;
  background-color: #202020;
  color: #fff;
`
const NavTop = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  max-width: 1200px;
  margin: auto;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`
const Image = styled.img`
height: 10px;
width: 25px;
margin-left: -1250px;
`
const Header_links = styled(Link)`
padding-left:30px;
list-style:none;
color:#fdf9f9;

`
const Div =  styled.div`
height: 10px;
font-size: 20px;
color: red;

`

export default Header
