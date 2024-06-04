// pages/index.tsx
"use client";
import React, { useState } from 'react';
import { Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import XComponent from "@/app/components/XComponent";
import YComponent from '@/app/components/YComponent';

const Home: React.FC = () => {
    const [selectedPage, setSelectedPage] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedPage(event.target.value);
    };

    return (
        <Container>
            <FormControl fullWidth>
                <InputLabel id="page-select-label">Select Page</InputLabel>
                <Select
                    labelId="page-select-label"
                    value={selectedPage}
                    label="Select Page"
                    onChange={handleChange}
                >
                    <MenuItem value="x">X Page</MenuItem>
                    <MenuItem value="y">Y Page</MenuItem>
                </Select>
            </FormControl>
            {selectedPage === 'x' && <XComponent />}
            {selectedPage === 'y' && <YComponent />}
        </Container>
    );
};

export default Home;
