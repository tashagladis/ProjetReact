import React from 'react'

import styled from 'styled-components'
import HeaderLogout from '../headerLogout'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <div>
        <div>
            <Link to='/home'> Home </Link>|
            <Link to='/favorite'>  Ma liste </Link>|
            <Link to='/search'> Rechercher Film</Link>
        </div>
          <NavTop>
            <div>
            <Image
           src="https://cloudinary-res.cloudinary.com/image/upload/v1521663307/MiniFlix-Logo_620x180.png" alt="Netflix" width="112" height="28"
        ></Image>
            </div>
            <div>NetFlix</div>
            <div>
              
            </div>
          </NavTop>
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
const header_links = styled(Link)`
padding-left:30px;
list-style:none;
color:#fdf9f9;

`

export default Header
