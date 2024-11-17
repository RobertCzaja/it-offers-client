import {Box} from "@mui/material";
import React from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    name: string;
}

export function CommonTabPanel(props: TabPanelProps) {
    const { name, children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`${name}panel-${index}`}
            aria-labelledby={`${name}-${index}`}
            className={`${name}-panel`}
            {...other}
        >
            {value === index && <Box className={`${name}-panel-box`}>{children}</Box>}
        </div>
    );
}

export function a11yProps(index: number, name: string) {
    return {
        id: `${name}-${index}`,
        'aria-controls': `${name}-${index}`,
    };
}