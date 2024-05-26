import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  if (value.length > 8) {
    alert("input length should be less than 8");
    setValue("");
  }
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
              padding: "16px",
              borderRadius: "20px 20px 0 0",
              margin: "auto",
            }}
          >
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
                  fontSize: "8vh",
                }}
                placeholder="0"
                value={value}
              />
            </div>
          </div>
          <div
            style={{
              height: "50vh",
              width: "48vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div>
              <input type="button" value="AC" onClick={(e) => setValue("")} />
              <input
                type="button"
                value="DE"
                onClick={(e) => setValue(value.slice(0, -1))}
              />
              <input
                type="button"
                value="."
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="/"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="7"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="8"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="9"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="*"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="4"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="5"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="6"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="+"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="1"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="2"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="3"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="-"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="00"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="0"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="="
                className="equal"
                onClick={(e) => setValue(eval(value))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
