import { render, cleanup, fireEvent } from "@testing-library/react";
import { LoginModal } from "../components/LoginModal";

afterEach(cleanup);

test("Inputs introducidos correctamente en componente Login", () => {
  const { getByPlaceholderText } = render(<LoginModal />);
  const email = getByPlaceholderText("Email Adress");
  const pass = getByPlaceholderText("Password");

  expect(email.value).toBe("");
  expect(pass.value).toBe("");

  fireEvent.change(email, { target: { value: "alex@luque.com" } });
  fireEvent.change(pass, { target: { value: "1234" } });

  expect(email.value).toBe("alex@luque.com");
  expect(pass.value).toBe("1234");
});
