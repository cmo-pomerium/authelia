// SPDX-FileCopyrightText: 2019 Authelia
//
// SPDX-License-Identifier: Apache-2.0

import React from "react";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import { render } from "@testing-library/react";

import LinearProgressBar from "@components/LinearProgressBar";

it("renders without crashing", () => {
    render(
        <ThemeProvider theme={createTheme()}>
            <LinearProgressBar value={40} />)
        </ThemeProvider>,
    );
});

it("renders adjusted height without crashing", () => {
    render(
        <ThemeProvider theme={createTheme()}>
            <LinearProgressBar value={40} height={2} />
        </ThemeProvider>,
    );
});
