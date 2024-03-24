import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page', () => {
  render(
    <App />
  );

  const landingPageElement = screen.getAllByRole('banner');
  expect(landingPageElement[0]).toBeInTheDocument();
});

test('renders "Get started" CTA', () => {
  render(
    <App />
  );

  const ctaElement = screen.getAllByText("Get started");
  expect(ctaElement[0]).toBeInTheDocument();
});