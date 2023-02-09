import ProjectsList from "@/components/section/projects/ProjectsList";
import { PageWrapper } from "@/utils/PageWrapper";
import { NextSeo } from "next-seo";
import React from "react";

const index = () => {
  return (
    <>
      <NextSeo
        title="Projects"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in interdum est. Duis elementum tempor nulla sed maximus. Nullam vel rutrum neque. Pellentesque nunc libero, porta in eros eu, imperdiet congue diam. Aliquam tristique eros vel mi cursus, non maximus."
      />
      <section>
        <PageWrapper>
          <ProjectsList />
        </PageWrapper>
      </section>
    </>
  );
};

export default index;
