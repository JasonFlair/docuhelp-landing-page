import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

test('renders landing page header', () => {
  render(<LandingPage />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});

test('renders "Get started" CTA', () => {
  render(<LandingPage />);
  const ctaElement = screen.getByText(/Get started/i);
  expect(ctaElement).toBeInTheDocument();
});