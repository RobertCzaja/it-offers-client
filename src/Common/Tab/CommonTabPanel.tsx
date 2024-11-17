import {Box} from "@mui/material";
import React from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    name: string;
    boxClass: string;
    containerClass: string;
    ariaLabel: string;
}

export function CommonTabPanel(props: TabPanelProps) {
    const { containerClass, ariaLabel, boxClass, name, children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`${name}-${index}`}
            aria-labelledby={`${ariaLabel}-${index}`}
            className={containerClass}
            {...other}
        >
            {value === index && <Box className={boxClass}>{children}</Box>}
        </div>
    );
}

export function a11yProps(index: number, name: string) {
    return {
        id: `${name}-${index}`,
        'aria-controls': `${name}-${index}`,
    };
}