"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const FooterContainer = styled(Box)({
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "60px 4%",
  "@media (max-width: 800px)": {
    padding: "58px 4%",
  },
  "@media (max-width: 600px)": {
    padding: "56px 4%",
  },
});

export const CopyrightBox = styled(Box)({
  // border: "1px solid purple",
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0.85rem",
  fontWeight: 300,
  color: "#e9e8e8ff",
});

export const CopyrightText = styled("span")({
  fontSize: "0.85rem",
  fontWeight: 300,
  //   color: "#e9e8e8ff",
});
