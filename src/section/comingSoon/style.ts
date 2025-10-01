"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const TextFocalPointBox = styled(Box)({
  //   border: "1px solid black",
  width: "100%",
  height: "fit-content",
  minHeight: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 30,
});

export const BigTextWrapper = styled(Box)({
  //   border: "1px solid navy",
  width: "100%",
  maxWidth: "700px",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const DescriptionWrapper = styled(Box)({
  //   border: "1px solid black",
  width: "100%",
  maxWidth: "700px",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
  textAlign: "center",
});

export const NotificationWrapper = styled(Box)({
  //   border: "1px solid black",
  width: "100%",
  maxWidth: "540px",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
  textAlign: "center",
});

export const FormBox = styled(Box)({
  //   border: "1px solid teal",
  width: "100%",
  height: "fit-content",
  minHeight: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
});
