import { Meta, StoryObj } from "@storybook/react";
import SignIn from "./SignIn";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "Pages/Sign In",
  component: SignIn,
  args: {},
  argTypes: {}
} as Meta

export const Default: StoryObj = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByLabelText("Email"), "amodeus@contato.com");
    userEvent.type(canvas.getByLabelText("Password"), "159753");
    userEvent.click(canvas.getByRole("button"));
  }
}