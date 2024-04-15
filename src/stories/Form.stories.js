// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import {Form} from "./Form.jsx";
import Config from "../config/index.jsx";

export default {
    title: 'Components/Forms',
    component: Form,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export const DefaultForms = {
    args: {
        backgroundColor: Config.defaultTheme.backgroundColor,
        textColor: Config.defaultTheme.textColor,
        linkColor: Config.defaultTheme.linkColor,
        codeBackgroundColor: Config.defaultTheme.codeBackgroundColor
    }
}