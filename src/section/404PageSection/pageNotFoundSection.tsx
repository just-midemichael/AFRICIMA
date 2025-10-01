import { HeroTitle } from "@/component/global/headerTitle/headerTitle";
import { Section } from "@/component/global/sectionContainer/sectionContainer";
import { appStyle } from "@/db/appStyle";
import { BigTextWrapper, TextFocalPointBox } from "./style";

export const PageNotFoundSection = () => {
  return (
    <Section
      style={{
        marginTop: "140px",
      }}
    >
      <TextFocalPointBox>
        <BigTextWrapper>
          <HeroTitle style={{ color: appStyle.headerTitleColor }}>
            Page Not Found
          </HeroTitle>
        </BigTextWrapper>
      </TextFocalPointBox>
    </Section>
  );
};
