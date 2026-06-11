import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Page>
      {/*HEADER*/}
      <Header>
        <TopHeader>
          <LogoContainer>
            <Logo src="./amazon-logo-white.png" alt="Amazon" />
          </LogoContainer>

          <LocationContainer>
            <SmallText>Ship to</SmallText>
            <BoldText>Location</BoldText>
          </LocationContainer>

          <SearchContainer>
            <SearchSelect>
              <option>All</option>
            </SearchSelect>

            <SearchInput placeholder="Search for products on Amazon..." />

            <SearchButton>
              <i className="fa-solid fa-magnifying-glass"></i>
            </SearchButton>
          </SearchContainer>

          <HeaderNav>
            <NavItem>
              <SmallText>Hello, sign in</SmallText>
              <BoldText>Accounts & Lists</BoldText>
            </NavItem>

            <NavItem>
              <SmallText>Returns</SmallText>
              <BoldText>& orders</BoldText>
            </NavItem>

            <CartContainer>
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Basket</span>
            </CartContainer>
          </HeaderNav>
        </TopHeader>

        {/* SUBHEADER */}
        <BottomHeader>
          <MenuItem>
            <i className="fa-solid fa-bars"></i>
            <span>All</span>
          </MenuItem>

          <MenuLinks>
            <span>Amazon Haul</span>
            <span>Best sellers</span>
            <span>New releases</span>
            <span>Amazon Basics</span>
            <span>Today's Deals</span>
            <span>Prime</span>
            <span>Fashion</span>
            <span>Electronics</span>
          </MenuLinks>
        </BottomHeader>
      </Header>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  background: #eaeded;
  min-height: 100vh;
`;

/* HEADER */

const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 500;
`;

const TopHeader = styled.div`
  background: #131921;
  color: white;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 110px;
  object-fit: contain;
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 50px;
`;

const SmallText = styled.span`
  font-size: 12px;
  color: #cccccc;
`;

const BoldText = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

const SearchContainer = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;

  &:focus-within {
    outline: 3px solid #febd69;
  }
`;

const SearchSelect = styled.select`
  width: 60px;
  border: none;
  background: #f3f3f3;
  padding-left: 10px;
  font-size: 12px;
  outline: none;
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  padding: 0 15px;
  font-size: 15px;
  outline: none;
`;

const SearchButton = styled.button`
  width: 50px;
  border: none;
  background: #febd69;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background: #f3a847;
  }
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: bold;

  i {
    font-size: 22px;
  }
`;

const BottomHeader = styled.div`
  background: #232f3e;
  color: white;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 20px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
`;

const MenuLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  span {
    cursor: pointer;
    white-space: nowrap;
    font-size: 14px;
  }
`;

export default Home;
