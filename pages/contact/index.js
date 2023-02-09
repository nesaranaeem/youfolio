import ContactHeroSection from "@/components/section/hero/ContactHeroSection";
import { PageWrapper } from "@/utils/PageWrapper";
import { NextSeo } from "next-seo";
import React from "react";

const index = () => {
  return (
    <>
      <NextSeo title="Contact" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in interdum est. Duis elementum tempor nulla sed maximus. Nullam vel rutrum neque. Pellentesque nunc libero, porta in eros eu, imperdiet congue diam. Aliquam tristique eros vel mi cursus, non maximus." />
      <PageWrapper>
        <ContactHeroSection />
      </PageWrapper>
    </>
  );
};

export default index;
