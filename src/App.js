import React from "react";

const App = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          flexDirection: "column",
          backgroundColor: "whitesmoke",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "2vh",
          }}
        >
          <div style={{ fontSize: "5vh", fontFamily: "Georgia" }}>
            Calculator
          </div>
          <p style={{ fontFamily: "Georgia" }}>
            Math problems? No problem. That’s what calculators are for!
          </p>
        </div>
        <div
          style={{
            boxShadow:
              "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
            borderRadius: "20px 20px",
          }}
        >
          <div
            style={{
              borderBottom: "1px solid black",
              backgroundColor: "black",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              padding: "20px",
              borderRadius: "20px 20px 0 0",
              margin: "auto",
            }}
          >
            <div
              style={{
                color: "gray",
                fontSize: "3vh",
              }}
            >
              small screen
            </div>
            <div style={{ fontSize: "5vh" }}>
              <input
                type="text"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  width: "40vh",
                  textAlign: "right",
                  outline: "none",
                  fontSize: "5vh",
                }}
                placeholder="0"
              />
            </div>
          </div>
          <div
            style={{
              padding: "5vh 10vh",
              height: "40vh",
              width: "30vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(5, 1fr)",
                columnGap: "28px",
                rowGap: "20px",
              }}
            >
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>C</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>+/-</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>%</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>/</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>1</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>2</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>3</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>X</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>4</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>5</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>6</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>-</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>7</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>8</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>9</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>+</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>00</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>0</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>.</b>
              </button>
              <button
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                  borderRadius: "1vh",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <b>=</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
