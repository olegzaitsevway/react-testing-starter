import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("pay button should be disabled", async () => {
  render(<TransactionCreateStepTwo receiver={{ id: "5" }} sender={{ id: "2" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("if an amount and note entered - pay button = enabled", async () => {
  render(<TransactionCreateStepTwo receiver={{ id: "5" }} sender={{ id: "2" }} />);

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "hello friend");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
