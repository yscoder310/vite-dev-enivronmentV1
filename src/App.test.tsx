import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the correct text in the DOM", () => {
  render(<App />);

  const textElement = screen.getByText(/Hello, Jest!/i);

  expect(textElement).toBeInTheDocument();
});
