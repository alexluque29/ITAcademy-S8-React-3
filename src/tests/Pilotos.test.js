
import { screen, render } from "@testing-library/react";
import {Pilotos} from '../components/Pilotos';

test('Prueba simple de texto en componente', () => {
  render(<Pilotos url="hola"/>);
  const textoPrueba = screen.getByText(/bank/i);
  expect(textoPrueba).toBeInTheDocument();
});