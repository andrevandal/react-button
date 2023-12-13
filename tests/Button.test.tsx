/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Button from "../src/components/Button.tsx";

import {describe, it, expect, vi, afterEach } from 'vitest'

describe('Button component', () => {
  const handleClick = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the button with primary color by default', () => {
    render(<Button>Primary Button</Button>);
    const buttonElement = screen.getByRole('button', { name: 'Primary Button' });
    expect(buttonElement).toHaveClass('primary');
  });

  it('renders the button with secondary color', () => {
    render(<Button color="secondary">Secondary Button</Button>);
    const buttonElement = screen.getByRole('button', { name: 'Secondary Button' });
    expect(buttonElement).toHaveClass('secondary');
  });

  it('calls the onClick callback when the button is clicked', () => {
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const buttonElement = screen.getByRole('button', { name: 'Clickable Button' });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when the disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const buttonElement = screen.getByRole('button', { name: 'Disabled Button' });
    expect(buttonElement).toBeDisabled();
  });

  it('renders the children correctly', () => {
    render(<Button>Text</Button>);
    const buttonElement = screen.getByRole('button', { name: 'Text' });
    expect(buttonElement).toHaveTextContent('Text');
  });

  it('renders an icon when the icon prop is provided', () => {
    render(<Button icon="check">Button with Icon</Button>);
    const iconElement = screen.getByRole('button', { name: 'Button with Icon' }).querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  });

  it('shows loading animation and disables button when loading is true', () => {
    render(<Button loading>Button Loading</Button>);
    const buttonElement = screen.getByRole('button');
  
    const loadingAnimation = buttonElement.querySelector('svg');
    
    expect(buttonElement).toHaveClass('loading');
    expect(buttonElement).toBeDisabled();
    expect(loadingAnimation).toBeInTheDocument();
  });

  it('throws error when icon and children is not defined', () => {
    const props = {
      icon: 'check',
      children: undefined,
    };
    expect(() => render(<Button {...props as any}></Button>)).toThrowError();
  });
});