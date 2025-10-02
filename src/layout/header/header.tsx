"use client";
import React from "react";
import {
  HeaderContainer,
  HeaderContentWrapper,
  HeaderLogo,
  HeaderLogoBox,
} from "./style";
import { useRouter } from "next/navigation";

export const Header = () => {
  // Userouter hook from next ; router.push(), router.back, router.forward, router.replace(), router.refresh()
  // This will be used to navigate pages in the app
  const router = useRouter();

  return (
    <header>
      <HeaderContainer>
        <HeaderContentWrapper>
          <HeaderLogoBox onClick={() => router.push("/")}>
            <HeaderLogo
              src="/logoBlack.svg"
              alt="africima primary logo"
              width={140}
              height={40}
              style={{ objectFit: "contain" }}
            />
          </HeaderLogoBox>
        </HeaderContentWrapper>
      </HeaderContainer>
    </header>
  );
};
