"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { appStyle } from "@/db/appStyle";

export const Form = styled("form")({
  //   border: "1px solid gold",
  width: "100%",
  maxWidth: "660px",
  height: "fit-content",
  display: "flex",
  alignItems: "center",
  gap: 10,
  background: "#ffff",
  borderRadius: "8px",
  overflowX: "hidden",
  position: "relative",
  "@media (max-width: 800px)": {
    maxWidth: "100%",
    minHeight: "100%",
    borderRadius: "0px",
  },
});

export const FormContentBox = styled(Box)({
  border: "1px solid silver",
  width: "100%",
  height: "fit-content",
  borderRadius: "8px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 2,
  padding: 4,
  "@media (max-width: 800px)": {
    alignItems: "flex-start",
  },
});

export const InputBox = styled(Box)({
  //   border: "1px solid silver",
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  overflow: "hidden",
});

export const EmailInput = styled("input")({
  height: "54px",
  width: "100%",
  padding: "10px 20px",
  border: "none",
  outline: "none",
  color: appStyle.paragraphColor,
  backgroundColor: "#fff",
  fontSize: "1.0rem",
  textTransform: "lowercase",
  "::placeholder": {
    color: appStyle.paragraphColor,
    opacity: 0.5,
    fontSize: "1.00rem",
    textTransform: "none",
  },
  "@media (max-width: 800px)": {
    height: "50px",
  },
});

export const ButtonBox = styled(Box)({
  //   border: "1px solid red",
  width: "180px",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
