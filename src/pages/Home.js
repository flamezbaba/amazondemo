import styled, { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import { mobile } from "../responsive";
import TopNav from "../components/TopNav";
// import { useMediaQuery } from "react-responsive";
import { hlSlider, topSeller } from "../data";
import c1 from "../assets/c1.png";
import sofa from "../assets/sofa.png";
import elon from "../assets/elon.mp4";

import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineArrowSmRight,
  HiShoppingCart,
} from "react-icons/hi";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.myWhite};
`;

const SButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  width: 150px;
  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: #fff;
  }
`;

const Card = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 4px 0px #eee;
`;

const SectionA = styled.div`
  display: flex;
  padding-left: 8%;
  padding-right: 8%;
  margin-top: 50px;
  padding-bottom: 50px;
  gap: 50px;
  ${mobile({ flexWrap: "wrap" })};

  .a1 {
    width: 52%;
    ${mobile({ width: "86%" })};

    /* outline: 1px solid red; */

    .div1 {
      flex-direction: column;
      width: 100%;

      ${Card} {
        flex-direction: column;
      }
    }

    .div2 {
      display: flex;
      width: 100%;
      margin-top: 40px;
      flex-direction: row;
      flex-wrap: nowrap;
      ${mobile({ display: "none" })}

      .l1 {
        height: 70px;
        width: 20%;

        ${Card} {
          flex-direction: column;
          width: 100px;
        }
      }

      .l2 {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: flex-end;
        width: calc(80% - 160px);

        .c1 {
          width: 200px;
          height: 100px;
        }

        .c2 {
          position: absolute;
          left: calc(100% + -40px);
          top: calc(-15%);
          width: 200px;
          height: 120px;
          background-color: #333;
          border-radius: 10px;

          video {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
      }
    }

    .div3 {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      width: 100%;

      .l1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        ${mobile({
          flexWrap: "wrap",
        })};

        ${Card} {
          flex: 1;
          flex-direction: column;
          overflow: hidden;

          ${mobile({
            width: "100%",
          })};

          div {
            display: flex;
            justify-content: flex-start;
            gap: 15px;
            margin-top: 10px;
            transition: all 1.5s ease;
            transform: translateX(${(props) => props.sliderIndex * -300}px);

            img {
              width: 150px;
              height: 80px;
              border-radius: 5px;
            }
          }
        }

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${(props) => props.theme.secondaryColor};
          color: ${(props) => props.theme.primaryColor};
          height: 150px;
          padding: 10px 20px;
          border-radius: 5px;
          margin-left: 20px;
          ${mobile({
            marginLeft: "0px",
            marginTop: "10px",
            width: "100%",
            height: "50px",
          })};
        }
      }

      .l2 {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        .ind {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;

          .sl {
            position: relative;
            overflow: hidden;

            .inner {
              width: 100px;
              height: 3px;
              border-radius: 20px;
              background-color: ${(props) => props.theme.secondaryColor};
            }

            .slider {
              position: absolute;
              top: 0;
              left: 0;
              width: 30px;
              height: 3px;
              border-radius: 20px;
              background-color: ${(props) => props.theme.primaryColor};
              /* transform: translateX(30%); */
              transition: all 1.5s ease;
              transform: translateX(${(props) => props.sliderIndex * 50}%);
            }
          }
        }

        .arr {
          display: flex;
          gap: 20px;

          button {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            border: 0px;
            border-radius: 10px;
            width: 30px;
            height: 30px;

            &:hover {
              box-shadow: 1px 1px 4px 0px #888;
            }
          }
        }
      }
    }
  }

  .a2 {
    width: 43%;
    height: 570px;
    border-radius: 10px;
    background-image: url("https://cloudfront-us-east-2.images.arcpublishing.com/reuters/5EBW4JPYLRPRTMP53GJQRMWNYM.jpg");
    background-size: cover;
    position: relative;
    ${mobile({ width: "86%" })};

    div {
      position: absolute;
      width: 200px;
      height: 70px;
      bottom: 0px;
      right: 0px;
      gap: 10px;
      background-color: ${(props) => props.theme.myWhite};
      color: ${(props) => props.theme.primaryColor};
      display: flex;
      justify-content: center;
      align-items: center;
      border-top-left-radius: 30px;
    }
  }
`;

const Bcard = styled.div`
  background-color: ${(props) => props.theme.myWhite};
  border-radius: 10px;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
`;

const SectionB = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  margin-top: 50px;
  padding-bottom: 50px;
  gap: 50px;
  background-color: #fff;
  height: auto;
  width: 100%;

  .r1,
  .r3 {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.myWhite};
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.grey1};
      }
    }
  }

  .r2 {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-evenly;
    ${mobile({ width: "90%", height: "400px", overflow: "hidden" })};

    ${Bcard} {
      width: 40%;
      height: 350px;
      display: flex;
      border-radius: 10px;
      ${mobile({ width: "100%" })};

      .b1 {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        p {
          font-size: 1.7rem;
        }

        li {
          list-style: none;
          text-align: left;
          margin-top: 10px;
        }

        button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 10px;
          padding-bottom: 10px;
          background-color: transparent;
          border-radius: 5px;
          border: 2px solid ${(props) => props.theme.primaryColor};
          color: ${(props) => props.theme.primaryColor};
          width: 150px;
          &:hover {
            background-color: ${(props) => props.theme.primaryColor};
            color: #fff;
          }
        }
      }

      .b2 {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        ${mobile({ display: "none" })};
        img {
          width: 50%;
          /* height: 50%; */
        }
      }
    }
  }
`;

const SectionC = styled.div`
  display: flex;
  padding-left: 8%;
  padding-right: 8%;
  margin-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
  background-color: ${(props) => props.theme.myWhite};
  height: auto;
  ${mobile({ flexWrap: "wrap", height: "auto" })};

  .a1 {
    display: flex;
    .l1 {
      width: 300px;

      .x1 {
        p {
          width: 100px;
          font-size: 30px;
          font-weight: 500;
          margin-bottom: 10px;
        }
      }

      .x2 {
        display: flex;
        position: relative;
        margin-top: 30px;
        padding: 20px 20px;
        background-color: #fff;
        border-radius: 10px;
        height: 150px;

        .q1 {
          width: 300px;

          p {
            font-size: 1.2rem;
            font-weight: 500;
          }

          .w1 {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 20px;

            span {
              padding: 5px 10px;
              background-color: ${(props) => props.theme.myWhite};
              color: ${(props) => props.theme.dark1};
              font-size: 0.8rem;
              font-weight: 500;
              border-radius: 10px;
            }
          }
        }

        .q2 {
          display: flex;
          width: 70px;
          justify-content: space-between;
          position: absolute;
          right: 30px;
          bottom: 10px;
          gap: 10px;
          /* outline: 2px solid green; */
          padding-top: 20px;
          padding-left: 20px;
          /* background-color: ${(props) => props.theme.myWhite}; */
          /* border-radius: -10px; */

          button {
            display: flex;
            align-items: center;
            padding: 5px 10px;
            background-color: transparent;
            border-radius: 10px;
            border: 1px solid ${(props) => props.theme.grey2};
            box-shadow: 2px 1px 1px ${(props) => props.theme.grey2};
            cursor: pointer;

            &:hover {
              box-shadow: 0px 0px 0px ${(props) => props.theme.grey2};
            }
          }
        }
      }
    }
  }

  .a2 {
    display: flex;
    /* justify-content: space-between; */
    gap: 20px;
    overflow: scroll;
    /* ${mobile({ overflow: "scroll" })}; */
    width: 100%;

    .p1 {
      background-color: #fff;
      height: 375px;
      width: 400px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;
      padding-bottom: 20px;

      .i {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 200px;
        margin-top: 10px;

        img {
          width: 200px;
        }
      }

      .g {
        margin-top: 10px;
        background-color: ${(props) => props.theme.myWhite};
        padding: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        position: relative;

        .title {
          font-weight: 500;
          font-size: 1rem;
        }

        .cat {
          font-size: 0.7rem;
          color: ${(props) => props.theme.dark1};
        }

        .price {
          font-weight: 500;
          font-size: 1.2rem;
          color: ${(props) => props.theme.primaryColor};
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 20px;
          right: 20px;
          background-color: ${(props) => props.theme.primaryColor};
          /* padding: 7px 30px; */
          border-radius: 5px;
          border: none;
          width: 70px;
          height: 30px;
          color: #fff;

          &:hover {
            background-color: transparent;
            border: 2px solid ${(props) => props.theme.primaryColor};
            color: ${(props) => props.theme.primaryColor};
          }
        }
      }
    }
  }
`;

const SectionD = styled.div`
  display: flex;
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 40px;
  background-color: #fff;
  height: auto;
  ${mobile({ flexWrap: "wrap", height: "auto" })};

  .x1{
    img{
      ${mobile({ width: "80%"})};
      width: 500px;
    }
  }

  .x2 {
    .t {
      font-size: 1.8rem;
      font-weight: 600;
    }

    .d {
      margin-top: 10px;
      font-size: 0.8rem;
      margin-bottom: 20px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 180px;
      height: 40px;
      background-color:  ${(props) => props.theme.primaryColor};
      color: #fff;
      border-radius: 7px;
      border: 2px solid ${(props) => props.theme.primaryColor};
      cursor: pointer;
      font-weight: 500;

      &:hover {
        background-color: transparent;
        color: ${(props) => props.theme.primaryColor};
      }
    }
  }
`;

const Home = () => {
  // const isMobile = useMediaQuery({ query: "(max-width: 810px)" });
  const [hlslideIndex, setHlslideIndex] = useState(0);

  const handleClick = (direction) => {
    const ll = (hlSlider.length - 1) / 2;

    if (direction === "left") {
      setHlslideIndex(hlslideIndex > 0 ? hlslideIndex - 1 : ll);
    } else {
      setHlslideIndex(hlslideIndex < ll ? hlslideIndex + 1 : 0);
    }

    console.log(hlslideIndex);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TopNav></TopNav>

        <SectionA sliderIndex={hlslideIndex}>
          <div className="a1">
            <div className="div1">
              <Card style={{ padding: "20px" }}>
                <p style={{ fontSize: "25px" }}>Tesla Bot</p>

                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 200,
                    marginTop: "20px",
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                  <br />
                  <br />
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </Card>
            </div>
            <div className="div2">
              <div className="l1">
                <Card style={{ padding: "20px 20px" }}>
                  <p style={{ fontSize: "17px", fontWeight: "300" }}>Price</p>

                  <p
                    style={{
                      fontSize: "23px",
                      fontWeight: 500,
                      marginTop: "5px",
                    }}
                  >
                    12 250$
                  </p>
                </Card>
              </div>
              <div className="l2">
                <div className="c1">
                  <Card
                    style={{
                      flexDirection: "column",
                      width: "130px",
                      paddingLeft: "15px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingRight: "30px",
                    }}
                  >
                    <p style={{ fontSize: "13px", fontWeight: "300" }}>
                      Elon Musk Reveals Tesla Bot
                    </p>

                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        marginTop: "5px",
                      }}
                    >
                      Tesla
                    </p>
                  </Card>
                </div>
                <div className="c2">
                  <video src={elon} controls></video>
                </div>
              </div>
            </div>
            <div className="div3">
              <div className="l1">
                <Card style={{ padding: "20px 20px" }}>
                  <p style={{ fontSize: "17px", fontWeight: "500" }}>
                    More product by Tesla
                  </p>
                  <div>
                    {hlSlider.map((item, index) => (
                      <img src={item} alt="" />
                    ))}
                  </div>
                </Card>
                <div className="btn">Goto Shop Page</div>
              </div>
              <div className="l2">
                <div className="ind">
                  <span>01</span>
                  <div className="sl">
                    <div className="inner"></div>
                    <div className="slider"></div>
                  </div>
                  <span>
                    {hlSlider.length < 10
                      ? "0" + hlSlider.length
                      : hlSlider.length}
                  </span>
                </div>
                <div className="arr">
                  <button onClick={() => handleClick("left")}>
                    <HiOutlineChevronLeft />
                  </button>
                  <button onClick={() => handleClick("right")}>
                    <HiOutlineChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="a2">
            <div>
              Go to product <HiOutlineArrowSmRight />
            </div>
          </div>
        </SectionA>
        <SectionB>
          <div className="r1">
            <button>
              <HiOutlineChevronLeft size={28} />
            </button>
          </div>
          <div className="r2">
            {["a", "a", "a", "a"].map((item) => (
              <Bcard>
                <div className="b1">
                  <p>Computers</p>
                  <div>
                    <li>Data Storage</li>
                    <li>Desktop PC</li>
                    <li>Keyboard</li>
                    <li>Monitors</li>
                    <li>Mouse</li>
                    <li>Tablets</li>
                  </div>
                  <button>
                    Go to Page <HiOutlineArrowSmRight />{" "}
                  </button>
                </div>
                <div className="b2">
                  <img src={c1} alt="" />
                </div>
              </Bcard>
            ))}
          </div>
          <div className="r3">
            <button>
              <HiOutlineChevronRight size={28} />
            </button>
          </div>
        </SectionB>
        <SectionC>
          <div className="a1">
            <div className="l1">
              <div className="x1">
                <p>Top Sellers Phone</p>
                <SButton>
                  Go to page <HiOutlineArrowSmRight />
                </SButton>
              </div>
              <div className="x2">
                <div className="q1">
                  <p>Quick view</p>
                  <div className="w1">
                    <span>Samsung</span>
                    <span>Apple</span>
                    <span>Xiaomi</span>
                    <span>Redmi</span>
                    <span>Google</span>
                    <span>Huawei</span>
                  </div>
                </div>
                <div className="q2">
                  <button onClick={() => handleClick("left")}>
                    <HiOutlineChevronLeft />
                  </button>
                  <button onClick={() => handleClick("right")}>
                    <HiOutlineChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="a2">
            {topSeller.map((item) => (
              <div className="p1">
                <div className="i">
                  <img src={item.avatar} alt="" />
                </div>

                <div className="g">
                  <div className="b">
                    <p className="title">{item.title}</p>
                    <p className="cat">{item.cat}</p>
                    <p className="price">{item.price}$</p>
                  </div>
                  <button onClick={() => handleClick("right")}>
                    <HiShoppingCart />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </SectionC>
        <SectionD>
          <div className="x1">
            <img src={sofa} alt="" />
          </div>
          <div className="x2">
            <p className="t">Week Ikea</p>
            <p className="d">
              No matter the season, and for any number of reason, there are
              always amazing offers waiting for you at IKEA Russia.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <button>Shop Now</button>
          </div>
        </SectionD>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
