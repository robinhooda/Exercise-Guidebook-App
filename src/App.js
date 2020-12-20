import React, { useState } from "react";
import "./styles.css";

var exerciseDB = {
  Chest: [
    {
      name: "Flat Bench Press",
      rating: "10/10"
    },
    {
      name: "Inclined Bench Press",
      rating: "9/10"
    },
    {
      name: "Incline Dumbell Fly",
      rating: "8/10"
    }
  ],

  Biceps: [
    {
      name: "Barbell Curls",
      rating: "9/10"
    },
    {
      name: "Close Grip barbell curls",
      rating: "10/10"
    },
    {
      name: "Hammer Curls",
      rating: "8/10"
    }
  ],
  Triceps: [
    {
      name: "Close-Grip Bench Press",
      rating: "10/10"
    },
    {
      name: "Cable Rope Tricep Pushdown",
      rating: "9/10"
    },
    {
      name: "One-Arm Overhead Extension",
      rating: "8/10"
    }
  ],
  Legs: [
    {
      name: "Squats",
      rating: "10/10"
    },
    {
      name: "Leg Press",
      rating: "9/10"
    },
    {
      name: "Romanian Deadlift",
      rating: "10/10"
    }
  ]
};

export default function App() {
  const [selectedBodyPart, setBodyPart] = useState("Chest");
  function bodyPartClickHandler(bodyPart) {
    setBodyPart(bodyPart);
  }
  return (
    <div className="App">
      <span id="heading"> 💪 Exercise Guidebook </span>
      <p style={{ fontSize: "1rem" }}>
        {" "}
        Checkout my favorite exercises. Select a particular body part to get
        started{" "}
      </p>

      <div>
        {Object.keys(exerciseDB).map((bodyPart) => (
          <button
            onClick={() => bodyPartClickHandler(bodyPart)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {bodyPart}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {exerciseDB[selectedBodyPart].map((exercise) => (
            <li
              key={exercise.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "1.2rem" }}> {exercise.name} </div>
              <div style={{ fontSize: "0.8rem" }}> {exercise.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ position: "fixed", bottom: 0, fontSize: "0.8rem" }}>
        Made with ❤️ by Robin Hooda{" "}
      </div>
    </div>
  );
}
