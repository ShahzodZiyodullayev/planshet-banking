import {
    createTheme,
    List,
    MantineProvider,
    Radio,
    SegmentedControl,
    Select,
    TextInput
} from "@mantine/core";
import {MantineEmotionProvider, emotionTransform} from "@mantine/emotion";
import {createElement, type ComponentType} from "react";
import {Notifications} from "@mantine/notifications";
import {DatePickerInput} from "@mantine/dates";

export const withMantine = (component: ComponentType) => () => {
    const theme = createTheme({
        fontFamily: "Inter Tight",
        components: {
            SegmentedControl: SegmentedControl.extend({
                styles: () => ({
                    root: {
                        backgroundColor: "#F3F6F8",
                    },
                    label: {
                        color: "#333",
                        fontWeight: 500,
                        fontSize: "16px",
                        transition: "color 0.3s ease",

                        "&[data-active]": {
                            color: "#fff",
                        },
                    },
                    indicator: {
                        backgroundColor: "#0061FF",
                        transition: "all 300ms ease-in-out",
                    },
                }),
            }),
            Radio: Radio.extend({
                defaultProps: {
                    color: "#000",
                },
                styles: () => ({
                    label: {
                        fontSize: "16px",
                        lineHeight: "20px",
                        fontWeight: 500,
                    },
                    radio: {
                        borderWidth: "2px",
                        borderColor: "#000",
                    },
                }),
            }),
            List: List.extend({
                defaultProps: {
                    listStyleType: "none",
                },
            }),
            Select: Select.extend({
                styles: () => ({
                    dropdown: {
                        borderRadius: "16px",
                    },
                    option: {
                        fontSize: "14px",
                        borderRadius: "14px",
                        fontWeight: 500,
                    },
                    label: {
                        marginBottom: "6px",
                        fontSize: "14px",
                        lineHeight: "normal",
                    },
                    placeholder: {
                        color: "#B9BBC6",
                    },
                    input: {
                        backgroundColor: "#F3F6F8",
                        fontSize: "14px",
                        fontWeight: 500,
                        borderColor: "transparent",
                        "&:focus": {
                            borderColor: "transparent",
                        },
                    },
                    error: {
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#FF5C6C",
                        lineHeight: "normal",
                    },
                }),
                defaultProps: {
                    radius: "12px",
                    size: "lg",
                    fz: "14px",
                },
            }),
            TextInput: TextInput.extend({
                styles: () => ({
                    label: {
                        marginBottom: "6px",
                        fontSize: "14px",
                        lineHeight: "normal",
                    },
                    placeholder: {
                        color: "#B9BBC6",
                    },
                    input: {
                        backgroundColor: "#F3F6F8",
                        fontSize: "14px",
                        borderColor: "transparent",
                        fontWeight: 500,
                        "&:focus": {
                            borderColor: "transparent",
                        },
                    },
                    error: {
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#FF5C6C",
                        lineHeight: "normal",
                    },
                }),
                defaultProps: {
                    radius: "12px",
                    size: "lg",
                    fz: "14px",
                },
            }),
            DatePickerInput: DatePickerInput.extend({
                styles: () => ({
                    label: {
                        marginBottom: "6px",
                        fontSize: "14px",
                        lineHeight: "normal",
                    },
                    placeholder: {
                        color: "#B9BBC6",
                    },
                    input: {
                        backgroundColor: "#F3F6F8",
                        fontSize: "14px",
                        borderColor: "transparent",
                        fontWeight: 500,
                        "&:focus": {
                            borderColor: "transparent",
                        },
                    },
                    day: {
                        "&[data-selected]": {
                            backgroundColor: "#0061FF",
                            color: "#fff",
                            fontWeight: 600,
                        },
                    },
                    "day:hover": {
                        backgroundColor: "#E0F0FF",
                    },
                    error: {
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#FF5C6C",
                        lineHeight: "normal",
                    },
                }),
                defaultProps: {
                    radius: "12px",
                    size: "lg",
                    fz: "14px",
                },
            }),
        },
    });

    return (
        <MantineProvider
            theme={theme}
            withCssVariables
            defaultColorScheme="light"
            stylesTransform={emotionTransform}>
            <MantineEmotionProvider>
                <Notifications limit={3} position="bottom-center" zIndex={100000}/>
                {createElement(component)}
            </MantineEmotionProvider>
        </MantineProvider>
    );
};
