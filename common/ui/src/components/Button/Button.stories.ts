import type { StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "string" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "테스트",
  },
};
