import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SignIn from "./page";
import axios from "axios";


jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe("Login Component", () => {
  it("should call login function with the correct arguments when Sign In button is clicked", () => {
    render(<SignIn />);

    // Find the input fields and button
    const accountInput = screen.getByPlaceholderText("Account");
    const passwordInput = screen.getByPlaceholderText("Password");
    const signInButton = screen.getByText("Sign In");

    // Fill in the input fields
    fireEvent.change(accountInput, { target: { value: "testAccount" } });
    fireEvent.change(passwordInput, { target: { value: "testPassword" } });

    // Click the sign in button
    fireEvent.click(signInButton);

    // Check if login function was called with the correct arguments
    expect(axios.post).toHaveBeenCalledWith("api", {
      account: "testAccount",
      password: "testPassword",
    });
  });
});
