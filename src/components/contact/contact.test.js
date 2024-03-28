import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "./contact";
import emailjs from "emailjs-com";

jest.mock("emailjs-com");

describe("Contact component", () => {
  it("renders without crashing", () => {
    render(<Contact />);
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });

  it("updates state when inputs change", () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Test Name" },
    });
    fireEvent.change(screen.getByLabelText("Subject"), {
      target: { value: "Test Subject" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Test Message" },
    });

    expect(screen.getByLabelText("Email").value).toBe("test@example.com");
    expect(screen.getByLabelText("Name").value).toBe("Test Name");
    expect(screen.getByLabelText("Subject").value).toBe("Test Subject");
    expect(screen.getByLabelText("Message").value).toBe("Test Message");
  });

  it("submits the form", async () => {
    const promise = Promise.resolve({ status: 200, text: "OK" });
    emailjs.sendForm.mockReturnValue(promise);

    render(<Contact />);
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Test Name" },
    });
    fireEvent.change(screen.getByLabelText("Subject"), {
      target: { value: "Test Subject" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Test Message" },
    });

    fireEvent.click(screen.getByText("Submit"));

    // Wait for a short delay before asserting the values
    // I'm well aware this is a poor way of doing this
    // But it will do, for the moment
    // TODO rewrite this test to avoid using a setTimeout
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(emailjs.sendForm).toHaveBeenCalled();
    expect(screen.getByLabelText("Email").value).toBe("");
    expect(screen.getByLabelText("Name").value).toBe("");
    expect(screen.getByLabelText("Subject").value).toBe("");
    expect(screen.getByLabelText("Message").value).toBe("");
  });
});
