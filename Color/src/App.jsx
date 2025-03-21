import React, { useState } from 'react';
import './App.css'

const ColorPicker = () => {
  const [board, setBoard] = useState(Array(100).fill(null));
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const colors = ['red', 'blue', 'green'];
  const selectedColor = colors[selectedColorIndex];

  const handleCellClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = selectedColor;
    setBoard(newBoard);
  };

  const handleColorButtonClick = () => {
    setSelectedColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <button
        style={{ backgroundColor: selectedColor, margin: '20px' }}
        onClick={handleColorButtonClick}
      >
        Current Color
      </button>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 30px)',
          border: '1px solid black',
        }}
      >
        {board.map((color, index) => (
          <div
            key={index}
            style={{
              width: '30px',
              height: '30px',
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