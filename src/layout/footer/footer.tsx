"use client";
import React from "react";
import { CopyrightBox, CopyrightText, FooterContainer } from "./style";
import { copyRight } from "@/db/footer";
import { appStyle } from "@/db/appStyle";

export const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <FooterContainer>
      <CopyrightBox>
        <CopyrightText sx={{ color: appStyle.paragraphColor }}>
          &copy; {year} {copyRight.copyRightText}
        </CopyrightText>
      </CopyrightBox>
    </FooterContainer>
  );
};
