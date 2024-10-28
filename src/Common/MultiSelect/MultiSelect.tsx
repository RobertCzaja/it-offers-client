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
}

export const MultiSelect = ({title, options}: MultiSelectProps) => {
    const [selectedNames, setSelectedNames] = useState<string[]>([]);

    return (
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel>{title}</InputLabel>
            <Select
                multiple
                value={selectedNames}
                onChange={(e) => /* @ts-ignore */
                    setSelectedNames(e.target.value)
                }
                input={<OutlinedInput label="Multiple Select" />}
                renderValue={(selected) => (
                    <Stack gap={1} direction="row" flexWrap="wrap">
                        {selected.map((value) => (
                            <Chip
                                key={value}
                                label={value}
                                onDelete={() =>
                                    setSelectedNames(
                                        selectedNames.filter((item) => item !== value)
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
                        {selectedNames.includes(name) ? <CheckIcon color="info" /> : null}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}