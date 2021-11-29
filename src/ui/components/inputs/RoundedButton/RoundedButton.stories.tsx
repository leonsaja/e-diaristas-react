import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import RounderButton from "./RoundedButton";

export default {
	title: "inputs/RounderButton",
	component: RounderButton,
} as ComponentMeta<typeof RounderButton>;

const Template: ComponentStory<typeof RounderButton> = (args) => (
	<RounderButton {...args}>clique aqui</RounderButton>
);

export const Default = Template.bind({});

Default.args = {
	variant: "contained",
};
