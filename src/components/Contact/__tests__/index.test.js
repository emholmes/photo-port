import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "../../Contact";

afterEach(cleanup);

describe("Contact form", () => {
  it("renders", () => {
    render(<ContactForm />);
  })
  it("matches snapshot", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
})

describe("h1 tag is visible", () => {
  it("h1 says Contact me", () => {
    const { getByTestId } = render(<ContactForm />);
  expect(getByTestId("h1-contact")).toHaveTextContent("Contact me");
  })
})

describe("contact form submit button visible", () => {
  it("form button says Submit", () => {
    const { getByTestId } = render(<ContactForm />);
  expect(getByTestId("contactForm-button")).toHaveTextContent("Submit");
  });
})


  