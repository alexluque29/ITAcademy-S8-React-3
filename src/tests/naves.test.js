import { screen, render } from "@testing-library/react";
import Naves from "../components/Naves";

test("Prueba simple de texto en componente", () => {
  render(<Naves />);
  const textoPrueba = screen.getByText(/loading/i);
  expect(textoPrueba).toBeInTheDocument();
});