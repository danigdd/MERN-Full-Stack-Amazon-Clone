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

      {/* HERO */}
      <HeroSection>
        <HeroOverlay />
      </HeroSection>

      {/* PRODUCTS */}
      <ProductsWrapper>
        {/* CARD */}
        <ProductCard>
          <h2>Electronics</h2>

          <ProductGrid>
            <MiniProduct>
              <ProductPlaceholder
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop')",
                }}
              />
              <span>Laptops</span>
            </MiniProduct>

            <MiniProduct>
              <ProductPlaceholder
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop')",
                }}
              />
              <span>Gaming</span>
            </MiniProduct>

            <MiniProduct>
              <ProductPlaceholder
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=800&auto=format&fit=crop')",
                }}
              />
              <span>Accessories</span>
            </MiniProduct>

            <MiniProduct>
              <ProductPlaceholder
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop')",
                }}
              />
              <span>Screens</span>
            </MiniProduct>
          </ProductGrid>

          <a href="/">See more</a>
        </ProductCard>

        {/* CARD */}
        <ProductCard>
          <h2>Home & Kitchen tools</h2>

          <ProductGrid>
            <MiniProduct>
              <ProductPlaceholder
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800&auto=format&fit=crop')",
                }}
              />
              <span>Kitchen</span>
            </MiniProduct>

            <MiniProduct>
              <ProductPlaceholder
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop')",
                }}
              />
              <span>Decor</span>
            </MiniProduct>

            <MiniProduct>
              <ProductPlaceholder
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop')",
                }}
              />
              <span>W.C.</span>
            </MiniProduct>

            <MiniProduct>
              <ProductPlaceholder
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop')",
                }}
              />
              <span>Bedroom</span>
            </MiniProduct>
          </ProductGrid>

          <a href="/">See more</a>
        </ProductCard>

        {/* CARD */}
        <ProductCard>
          <h2>Fashion</h2>

          <ProductGrid>
            <MiniProduct>
              <ProductPlaceholder
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop')",
                }}
              />
              <span>Man</span>
            </MiniProduct>

            <MiniProduct>
              <ProductPlaceholder
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop')",
                }}
              />
              <span>Woman</span>
            </MiniProduct>

            <MiniProduct>
              <ProductPlaceholder
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop')",
                }}
              />
              <span>Gym wear</span>
            </MiniProduct>

            <MiniProduct>
              <ProductPlaceholder
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop')",
                }}
              />
              <span>Watches</span>
            </MiniProduct>
          </ProductGrid>

          <a href="/">Explore</a>
        </ProductCard>

        {/* CARD */}
        <ProductCard>
          <h2>Top sales</h2>

          <BigProductPlaceholder
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <a href="/">View products</a>
        </ProductCard>
      </ProductsWrapper>

      {/* PRODUCTS ROW */}
      <HorizontalSection>
        <SectionTitle>Amazon choice</SectionTitle>

        <HorizontalProducts>
          <HorizontalProduct
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop')",
            }}
          />

          <HorizontalProduct
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop')",
            }}
          />

          <HorizontalProduct
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop')",
            }}
          />

          <HorizontalProduct
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop')",
            }}
          />

          <HorizontalProduct
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop')",
            }}
          />

          <HorizontalProduct
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop')",
            }}
          />

          <HorizontalProduct
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop')",
            }}
          />

          <HorizontalProduct
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop')",
            }}
          />

          <HorizontalProduct
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=800&auto=format&fit=crop')",
            }}
          />

          <HorizontalProduct
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop')",
            }}
          />

          <HorizontalProduct
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop')",
            }}
          />

          <HorizontalProduct
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop')",
            }}
          />
        </HorizontalProducts>
      </HorizontalSection>
      {/* FOOTER */}
      <Footer>
        <BackToTop>Back to top</BackToTop>

        <FooterContent>
          <FooterColumn>
            <h4>Meet us</h4>
            <span>Work with Amazon</span>
            <span>About us</span>
            <span>Amazon in 2026</span>
          </FooterColumn>

          <FooterColumn>
            <h4>Earn money with us</h4>
            <span>Sell on Amazon</span>
            <span>Afiliates program</span>
            <span>Advertising</span>
          </FooterColumn>

          <FooterColumn>
            <h4>Payment methods</h4>
            <span>Credit and Debit Cards</span>
            <span>Pay in installments</span>
            <span>Gift cards</span>
          </FooterColumn>

          <FooterColumn>
            <h4>Help</h4>
            <span>Customer support</span>
            <span>Orders</span>
            <span>Returns</span>
          </FooterColumn>
        </FooterContent>

        <FooterBottom>
          <img src="./amazon-logo-white.png" alt="Amazon Logo" />
        </FooterBottom>
      </Footer>
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
  overflow: hidden;
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
  height: 30px;
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

/* HERO */

const HeroSection = styled.section`
  width: 100%;
  height: 350px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #eaeded 90%);
  position: relative;

  isolation: isolate;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("https://images.unsplash.com/photo-1519389950473-47ba0277781c");
    background-size: cover;
    background-position: center;
    z-index: -2;
  }
`;

const HeroOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, #eaeded);
`;

/* PRODUCTS */

const ProductsWrapper = styled.div`
  max-width: 1500px;
  margin: -140px auto 0 auto;
  padding: 0 20px 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  position: relative;
  z-index: 10;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 420px;

  h2 {
    font-size: 21px;
  }

  a {
    margin-top: auto;
    text-decoration: none;
    color: #007185;
    font-size: 14px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const MiniProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-size: 12px;
  }
`;

const ProductPlaceholder = styled.div`
  width: 100%;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const BigProductPlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background: #e3e6e6;
`;

/* HORIZONTAL */

const HorizontalSection = styled.section`
  max-width: 1500px;
  margin: 0 auto 40px auto;
  padding: 20px;
  padding-left: 30px;
  background: white;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
`;

const HorizontalProducts = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 6px;
  }
`;

const HorizontalProduct = styled.div`
  min-width: 220px;
  height: 220px;
  background: #e3e6e6;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

/* FOOTER */

const Footer = styled.footer`
  margin-top: 40px;
`;

const BackToTop = styled.div`
  background: #37475a;
  color: white;
  text-align: center;
  padding: 15px;
  cursor: pointer;
  font-size: 13px;
`;

const FooterContent = styled.div`
  background: #232f3e;
  color: white;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  gap: 100px;
  flex-wrap: wrap;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h4 {
    margin-bottom: 10px;
    font-size: 16px;
  }

  span {
    color: #dddddd;
    font-size: 14px;
    cursor: pointer;
  }
`;

const FooterBottom = styled.div`
  background: #131a22;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  img {
    width: 100px;
    object-fit: contain;
  }
`;

export default Home;
