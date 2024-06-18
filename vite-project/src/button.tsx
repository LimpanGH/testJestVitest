import React from 'react';

// Define the props interface
interface ButtonProps {
  label: string;
  onClick: () => void;
}

// Create the Button component
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
