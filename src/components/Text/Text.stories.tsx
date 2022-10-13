import { Meta, StoryObj } from "@storybook/react";
import Text, { TextProps } from "./Text";

export default {
  title: "components/Text",
  component: Text,
  args: {
    children: "Lorem Ipsum",
    size: "md"
  }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const CustomText: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Eu sou um parágrafo</p>
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
}