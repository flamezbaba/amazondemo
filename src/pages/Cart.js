import styled, { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import { mobile } from "../responsive";
import TopNav from "../components/TopNav";
import { useMediaQuery } from "react-responsive";
import { hlSlider, topSeller } from "../data";
import c1 from "../assets/c1.png";
import sofa from "../assets/sofa.png";
import elon from "../assets/elon.mp4";

import {
  HiOutlineShoppingBag,
  HiOutlineTrash,
  HiShoppingCart,
} from "react-icons/hi";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.myWhite};
`;

const Wrapper = styled.div`
  display: flex;
  padding-left: 8%;
  padding-right: 8%;
  margin-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
  background-color: ${(props) => props.theme.myWhite};
  height: auto;
  flex-wrap: wrap;
  ${mobile({ flexWrap: "wrap", height: "auto" })};
`;

const SectionA = styled.div`
  width: 100%;

  p {
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

const SectionB = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  ${mobile({ flexWrap: "wrap"})};

  .a1 {
    width: 70%;
    background-color: #fff;
    border-radius: 10px;
    ${mobile({ width: "100%"})};

    .it {
      padding: 20px;
      display: flex;
      gap: 20px;
      border-bottom: 1px solid ${(props) => props.theme.myWhite};
      

      .im {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.myWhite};
        ${mobile({ width: "100px"})};
      }

      .x2 {
        display: flex;
        flex: 1;
        justify-content: space-between;
        ${mobile({ gap: "10px", flexWrap: "wrap"})};

        .l1 {
          p:nth-child(1) {
            font-size: 1.1rem;
            font-weight: 500;
          }

          ${mobile({ width: "100%"})};

          p:nth-child(2) {
            font-size: 0.8rem;
            color: ${(props) => props.theme.dark1};
          }

          div {
            display: flex;
            margin-top: 10px;
            padding: 3px 3px;
            align-items: center;
            font-size: 0.8rem;
            width: 70px;
            border-radius: 5px;
            justify-content: space-evenly;
            background-color: ${(props) => props.theme.secondaryColor};
            color: ${(props) => props.theme.primaryColor};
          }
        }

        .l2 {
          display: flex;
          gap: 7px;
          width: 50px;
          align-items: center;
          ${mobile({ width: "100%"})};
          span:nth-child(1),
          span:nth-child(3) {
            background-color: ${(props) => props.theme.myWhite};
            padding: 1px 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 3px;
            cursor: pointer;

            &:hover {
              background-color: ${(props) => props.theme.grey1};
            }
          }
        }

        .l3 {
          display: flex;
          gap: 7px;
          width: 50px;
          align-items: center;
          color: ${(props) => props.theme.primaryColor};
          font-weight: 500;
          ${mobile({ width: "50%"})};
        }

        .l4 {
          display: flex;
          gap: 7px;
          width: 50px;
          align-items: center;
          justify-content: flex-end;
          ${mobile({ width: "40%"})};
        }
      }
    }
  }

  .a2 {
    width: 30%;
    ${mobile({ width: "100%"})};

    .prl {
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;

      .r1 {
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
        color: ${(props) => props.theme.dark1};
        font-weight: 500;
      }

      .r2 {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        font-weight: 600;
        margin-top: 10px;

        span:nth-child(1) {
          color: ${(props) => props.theme.dark2};
        }

        span:nth-child(2) {
          color: ${(props) => props.theme.primaryColor};
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
        background-color: ${(props) => props.theme.primaryColor};
        color: #fff;
        border-radius: 7px;
        border: 2px solid ${(props) => props.theme.primaryColor};
        cursor: pointer;
        font-weight: 500;
        margin-top: 10px;
        transition: all 0.3s ease;

        &:hover {
          background-color: transparent;
          color: ${(props) => props.theme.primaryColor};
        }
      }
    }
  }
`;

const Cart = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TopNav></TopNav>
        <Wrapper>
          <SectionA>
            <p>Shopping Cart</p>
          </SectionA>
          <SectionB>
            <div className="a1">
              {["a", "d", ""].map((item) => (
                <div className="it">
                  <div className="im"></div>
                  <div className="x2">
                    <div className="l1">
                      <p>Product Name</p>
                      <p>Description</p>
                      <div>
                        <HiOutlineShoppingBag />
                        Nvidia
                      </div>
                    </div>
                    <div className="l2">
                      <span>-</span>
                      <span>2</span>
                      <span>+</span>
                    </div>
                    <div className="l3">
                      <p>900.00$</p>
                    </div>
                    <div className="l4">
                      <HiOutlineTrash />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="a2">
              <div className="prl">
                <div className="r1">
                  <span>Product </span>
                  <span>2 </span>
                </div>
                <div className="r2">
                  <span>SubTotal </span>
                  <span>5,000.00$ </span>
                </div>
                <button>Confirm</button>
              </div>
            </div>
          </SectionB>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default Cart;
