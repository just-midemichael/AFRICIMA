import { Section } from "@/component/global/sectionContainer/sectionContainer";
import React from "react";
import {
  BigTextWrapper,
  DescriptionWrapper,
  FormBox,
  NotificationWrapper,
  TextFocalPointBox,
} from "./style";
import { HeroTitle } from "@/component/global/headerTitle/headerTitle";
import { appStyle } from "@/db/appStyle";
import { Paragraph1, Paragraph3 } from "@/component/global/paragraph/paragraph";
import { comingSoon } from "@/db/comingSoon";
import { NotifyForm } from "@/form/notifyForm/notifyForm";

export const ComingSoonSection = () => {
  return (
    <Section
      style={{
        marginTop: "140px",
      }}
    >
      <TextFocalPointBox>
        <BigTextWrapper>
          <HeroTitle
            style={{
              color: appStyle.headerTitleColor,
              fontWeight: appStyle.appGlobalTitleFontWeight,
              textAlign: "center",
            }}
          >
            {comingSoon.bigText}
          </HeroTitle>
        </BigTextWrapper>
        <DescriptionWrapper>
          <Paragraph1
            style={{
              color: appStyle.paragraphColor,
              fontWeight: 700,
            }}
          >
            {comingSoon.description}
          </Paragraph1>
        </DescriptionWrapper>
      </TextFocalPointBox>
      <FormBox>
        <NotificationWrapper>
          <Paragraph3
            style={{
              color: appStyle.paragraphColor,
              fontWeight: 400,
            }}
          >
            {comingSoon.notification}
          </Paragraph3>
        </NotificationWrapper>
        <NotifyForm />
      </FormBox>
    </Section>
  );
};
