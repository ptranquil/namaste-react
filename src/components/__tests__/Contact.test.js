import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

/** describe is used to group the test cases */
describe("Contact us page test cases", () => {
    // in place of "test" we can use "it" also
    test("Whether contact us page is rendered successfully or not", () => {

        render(<Contact />)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
    })

    test("Whether contact us page button is rendered successfully or not", () => {

        render(<Contact />)
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument();
    })

    test("Whether contact us page button is rendered successfully or not", () => {

        render(<Contact />)
        expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
    })

    it("should load 2 input box in contact us page", () => {

        render(<Contact />)
        const inputboxes = screen.getAllByRole("textbox");
        expect(inputboxes.length).toBe(2)
        // expect(inputboxes.length).not.toBe(2)
        // console.log(inputboxes.length)
    })
})