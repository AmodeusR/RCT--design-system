import { Meta, StoryObj } from "@storybook/react";
import Heading, { HeadingProps } from "./Heading";

export default {
  title: "components/Heading",
  component: Heading,
  args: {
    children: "Titulum"
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio"
      }
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {};

export const CustomHeading: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>H1 Titulum</h1>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
};