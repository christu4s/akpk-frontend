import { Box, Button } from "@mui/material";
import React from "react";

export default function StyledButton({ children, onClick, ...otherProps }) {
  return <CssBaseline>{children}</CssBaseline>;
}
