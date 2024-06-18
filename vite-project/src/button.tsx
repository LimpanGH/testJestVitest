import React from 'react';

// Define the props interface
export interface ButtonProps {
  label: string;
  onClick: () => void;
}

// Create the Button component
export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};


