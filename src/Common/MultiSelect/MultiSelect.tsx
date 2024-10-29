import React, { useState } from "react";
import {
    OutlinedInput,
    InputLabel,
    MenuItem,
    Select,
    FormControl,
    Stack,
    Chip,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";

interface MultiSelectProps {
    title: string,
    options: string[],
    selected: string[],
    setSelected: (newSelected: string[]) => void,
}

export const MultiSelect = ({title, options, selected, setSelected}: MultiSelectProps) => {
    return (
        <FormControl sx={{ width: 509}} size="small">
            <InputLabel>{title}</InputLabel>
            <Select
                multiple
                value={selected}
                onChange={(e) => /* @ts-ignore */
                    setSelected(e.target.value)
                }
                input={<OutlinedInput label="Multiple Select" />}
                renderValue={(selected) => (
                    <Stack gap={1} direction="row" flexWrap="wrap">
                        {selected.map((value) => (
                            <Chip
                                key={value}
                                label={value}
                                size='small'
                                onDelete={() =>
                                    setSelected(
                                        selected.filter((item) => item !== value)
                                    )
                                }
                                deleteIcon={
                                    <CancelIcon
                                        onMouseDown={(event) => event.stopPropagation()}
                                    />
                                }
                            />
                        ))}
                    </Stack>
                )}
            >
                {options.map((name: string) => (
                    <MenuItem
                        key={name}
                        value={name}
                        sx={{ justifyContent: "space-between" }}
                    >
                        {name}
                        {selected.includes(name) ? <CheckIcon color="info" /> : null}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}