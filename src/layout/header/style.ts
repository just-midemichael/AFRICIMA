"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import image from "next/image";

export const HeaderContainer = styled(Box)({
  //   border: "2px solid gold",
  zIndex: 20,
  width: "100%",
  height: "fit-content",
  position: "fixed",
  top: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px 4%",
  "@media (max-width: 800px)": {
    padding: "6px 4%",
  },
  "@media (max-width: 600px)": {
    padding: "6px 4%",
  },
  //   backdropFilter: "blur(2px)",
  // backgroundColor: "#f6faffff",
});

export const HeaderContentWrapper = styled(Box)({
  //   border: "1px solid #D4AF37",
  borderRadius: "50px",
  width: "100%",
  maxWidth: "260px",
  // maxWidth: "1200px", // or 1400px
  height: "100%",
  minHeight: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "40px",
  backdropFilter: "blur(2px)",
  WebkitBackdropFilter: "blur(2px)",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  "@media (max-width: 800px)": {
    minHeight: "60px",
  },
});

export const HeaderLogoBox = styled(Box)({
  //   border: "1px solid green",
  width: "fit-content",
  minWidth: "100px",
  height: "100%",
  minHeight: "40px",
  display: "flex",
});

export const HeaderLogo = styled(image)({
  width: "140px",
  height: "40px",
  cursor: "pointer",
  objectFit: "contain",
  "@media (max-width: 800px)": {
    height: "42px",
  },
});
