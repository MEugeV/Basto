import { render, screen, fireEvent } from "@testing-library/react";
import CreateCowButton from "../components/createCowButton.jsx";

describe("CreateCowButton component", () => {
  test("renders button to create a new Cow", () => {
    render(<CreateCowButton />);
    let button = screen.getByRole("button", {
      class: "newCow",
    });
    expect(button).toBeInTheDocument();
  });

  test("after clicking the button, CreateCowForm is rendered the document", () => {
    render(<CreateCowButton />);
    let button = screen.getByRole("button", {
      class: "newCow",
    });
    let modal = screen.getByRole("div", {
      class: "modal",
    });
    fireEvent.click(button);
    expect(modal).toBeInTheDocument();
  });
});
