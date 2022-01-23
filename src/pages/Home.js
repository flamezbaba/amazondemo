import styled, { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import { mobile } from "../responsive";
import TopNav from "../components/TopNav";
import { useMediaQuery } from "react-responsive";
import { hlSlider } from "../data";

import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.myWhite};
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
  margin-top: 50px;
  padding-bottom: 50px;

  .a1 {
    width: 42%;
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
            box-shadow: 1px 1px 4px 0px #eee;
          }
        }
      }
    }
  }
`;

const SectionB = styled.div`
  display: flex;
  padding-right: 8%;
  margin-top: 50px;
  padding-bottom: 50px;
  outline: 1px solid black;
`;

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 810px)" });
  const [hlslideIndex, setHlslideIndex] = useState(0);

  const handleClick = (direction) => {
    const ll = (hlSlider.length-1)/2;
    
    if(direction === "left"){
      setHlslideIndex(hlslideIndex > 0 ? hlslideIndex - 1 : ll);
    }
    else{
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
                  {/* <video src="https://youtu.be/plNmaCuPSYw" controls></video> */}
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
                  <button onClick={()=> handleClick("left")}>
                    <HiOutlineChevronLeft />
                  </button>
                  <button onClick={()=> handleClick("right")}>
                    <HiOutlineChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SectionA>
        <SectionB></SectionB>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
