import React, { useState } from 'react';
import './App.css'

const ColorPicker = () => {
  const [board, setBoard] = useState(Array(100).fill(null));
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const colors = ['red', 'blue', 'green'];
  const selectedColor = colors[selectedColorIndex];

  const handleCellClick = (index) => {
    const newBoard = [...board];
    if (newBoard[index] === selectedColor) {
      newBoard[index] = null; // Clear the cell if it already has the same color
    } else {
      newBoard[index] = selectedColor; // Otherwise, set the color
    }
    setBoard(newBoard);
  };

  const handleColorButtonClick = () => {
    setSelectedColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const handleClearButtonClick = () => {
    setBoard(Array(100).fill(null));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <button
          style={{ backgroundColor: selectedColor, margin: '5px' }}
          onClick={handleColorButtonClick}
        >
          Change Color
        </button>
        <button style={{ margin: '5px' }} onClick={handleClearButtonClick}>
          Clear Board
        </button>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 60px)',
          border: '1px solid black',
        }}
      >
        {board.map((color, index) => (
          <div
            key={index}
            style={{
              width: '60px',
              height: '60px',
              border: '1px solid lightgray',
              backgroundColor: color,
            }}
            onClick={() => handleCellClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;