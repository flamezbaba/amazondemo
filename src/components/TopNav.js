import styled, { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import { mobile } from "../responsive";
import avatar from "../assets/avatar.png";
import logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";

import {
  HiOutlineShoppingCart,
  HiViewGrid,
  HiOutlineBadgeCheck,
  HiBriefcase,
  HiOutlineHeart,
  HiOutlineSearch,
  HiMenu,
  HiOutlineLogout,
  HiUserCircle,
} from "react-icons/hi";

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;

  img {
    width: 50px;
    height: 50px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;
  background-color: #fff;
  box-shadow: 0px 0px 5px -1px #eee;
`;

const LeftNav = styled.div`
  width: 43%;
  display: flex;
  justify-content: flex-start;
  font-weight: 400;
  ${mobile({ display: "none" })}

  span {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      transition: ease-in-out;
    }
  }

  svg {
    margin-right: 5px;
    vertical-align: middle;
  }
`;

const RightNav = styled.div`
  min-width: 53%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* outline: 2px solid red; */
  padding-right: 30px;
`;

const Bsvg = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.myWhite};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.dark2};
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  &:hover {
    background-color: ${(props) => props.theme.grey1};
  }
`;

const MobileMenuWrapper = styled.div`
  display: flex;
  position: relative;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  top: calc(100% + 16px);
  right: 0;
  width: 200px;
  min-height: 100px;
  background-color: #fff;
  z-index: 100;
  box-shadow: 1px 1px 4px 0px #eee;

  .mmx {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    padding: 10px 20px;
    border-bottom: 1px solid ${(props) => props.theme.grey1};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.grey1};
    }

    &:last-child {
      border-bottom: 0px solid ${(props) => props.theme.grey1};
    }
  }
`;

const TopNav = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 810px)" });
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <ThemeProvider theme={theme}>
        <Header>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
          <LeftNav>
            <div
              style={{
                display: "flex",
                gap: 40,
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <span>
                <HiViewGrid />
                Catalog
              </span>
              <span>
                <HiOutlineBadgeCheck /> Best Deals
              </span>
              <span>
                <HiBriefcase />
                Become Seller
              </span>
            </div>
          </LeftNav>
          <RightNav>
            <div style={{ display: "flex", gap: 20 }}>
              <Bsvg>
                <HiOutlineSearch size={16} />
              </Bsvg>
              <Bsvg>
                <HiOutlineHeart size={16} />
              </Bsvg>
              <Bsvg>
                <HiOutlineShoppingCart size={16} />
              </Bsvg>
              {!isMobile && (
                <Bsvg>
                  <img src={avatar} alt="" />
                </Bsvg>
              )}

              {isMobile && (
                <MobileMenuWrapper>
                  <HiMenu
                    size={"2rem"}
                    onClick={toggleMenu}
                    style={{ cursor: "pointer" }}
                  />
                  {showMenu && (
                    <MobileMenu>
                      <div className="mmx">
                        <HiViewGrid size={"1.5rem"} />
                        Catalog
                      </div>
                      <div className="mmx">
                        <HiOutlineBadgeCheck size={"1.5rem"} /> Best Deals
                      </div>
                      <div className="mmx">
                        <HiBriefcase size={"1.5rem"} />
                        Become Seller
                      </div>
                      <div className="mmx">
                        <HiUserCircle size={"1.5rem"} />
                        My Account
                      </div>
                      <div className="mmx">
                        <HiOutlineLogout size={"1.5rem"} />
                        Sign Out
                      </div>
                    </MobileMenu>
                  )}
                </MobileMenuWrapper>
              )}
            </div>
          </RightNav>
        </Header>
    </ThemeProvider>
  );
};

export default TopNav;
