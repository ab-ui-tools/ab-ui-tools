import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './Button';

const MockIcon = () => <svg data-testid="mock-icon" />;

describe('Button', () => {
  it('renders correctly with text', () => {
    render(<Button buttonText="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders correctly with children', () => {
    render(<Button>Children text</Button>);
    expect(screen.getByText('Children text')).toBeInTheDocument();
  });

  it('applies default primary and large classes', () => {
    const { container } = render(<Button buttonText="Submit" />);
    const button = container.firstChild as HTMLElement;
    expect(button).toHaveClass('btn', 'btn--primary', 'btn--large');
  });

  it('applies custom className', () => {
    const { container } = render(<Button buttonText="Submit" className="custom-class" />);
    const button = container.firstChild as HTMLElement;
    expect(button).toHaveClass('custom-class');
  });

  it('handles onClick event', () => {
    const handleClick = vi.fn();
    render(<Button buttonText="Click me" onClick={handleClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire onClick when disabled', () => {
    const handleClick = vi.fn();
    render(<Button buttonText="Click me" onClick={handleClick} disabled />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });

  it('does not fire onClick when isLoading is true', () => {
    const handleClick = vi.fn();
    const { container } = render(<Button buttonText="Click me" onClick={handleClick} isLoading />);

    const button = container.firstChild as HTMLElement;
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toHaveClass('pointer-events-none');
  });

  it('renders loader when isLoading is true', () => {
    const { container } = render(<Button buttonText="Submit" isLoading />);

    const loaderWrapper = container.querySelector('.btn__loader');
    expect(loaderWrapper).toBeInTheDocument();

    const content = container.querySelector('.btn__content');
    expect(content).toHaveClass('btn__content--hidden');
  });

  it('renders icon when iconProps is provided', () => {
    render(<Button buttonText="Icon Button" iconProps={{ Component: MockIcon, type: 'primary' }} />);

    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('applies just-icon styling when only icon is provided', () => {
    const { container } = render(<Button iconProps={{ Component: MockIcon, type: 'primary' }} />);

    const button = container.firstChild as HTMLElement;
    expect(button).toHaveClass('btn--icon');
  });
});
