import React from "react";

// Exemplo do funcionamento de bubbling phase no js
export default function Bubbling() {
  return (
    <div
      id="d1"
      style={{
        backgroundColor: "green",
        width: "150px",
        height: "150px",
        position: "relative"
      }}
      onClick={(e) =>
        alert("target = " + e.target.id + ", this=" + e.currentTarget.id)
      }
    >
      <div
        id="d2"
        style={{
          backgroundColor: "red",
          width: "100px",
          height: "100px",
          top: "25px",
          left: "25px",
          position: "absolute"
        }}
        onClick={(e) =>
          alert("target = " + e.target.id + ", this=" + e.currentTarget.id)
        }
      >
        <div
          id="d3"
          style={{
            backgroundColor: "blue",
            width: "50px",
            height: "50px",
            top: "25px",
            left: "25px",
            position: "absolute"
          }}
          onClickCapture={(e) => {
            alert("target = " + e.target.id + ", this=" + e.currentTarget.id);
            e.stopPropagation();
            console.log(e);
          }}
        ></div>
      </div>
    </div>
  );
}
