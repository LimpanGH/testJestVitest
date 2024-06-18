// // Import necessary libraries
// import { render, screen } from '@testing-library/react';
// import { Button, ButtonProps } from './button'; 
// import '@testing-library/jest-dom';
// import { vi } from 'vitest';
// import { describe, it, expect } from 'vitest';



// describe('Button component', () => {
//   it('should render the button text', () => {
//     // Define button props
//     const buttonProps: ButtonProps = {
//       label: 'Click me',
//       onClick: vi.fn(), // Mock onClick function
//     };

//     // Render the Button component
//     render(<Button {...buttonProps} />);

//     // Assert that the button text is rendered
//     const button = screen.getByRole('button', { name: /Click me/i });
//     vi.expect(button).toBeInTheDocument(); // Works after installing @testing-library/jest-dom
//   });
// });

import React from 'react';
import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';
import { expect } from 'vitest';

import '@testing-library/jest-dom';

describe('Button', () => {
  it('renders with the correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const onClickMock = vi.fn();
    render(<Button label="Click me" onClick={onClickMock} />);
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});