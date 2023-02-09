import AboutHeroSection from "@/components/section/hero/AboutHeroSection";
import AllSkills from "@/components/section/skills/skills/AllSkills";
import { PageWrapper } from "@/utils/PageWrapper";
import { NextSeo } from "next-seo";

const index = () => {
  return (
    <>
      <NextSeo
        title="About"
        description="As a Full Stack Web Developer with experience in both front-end and back-end development, I am adept at creating responsive and user-friendly web applications. My professional skillset includes expertise in HTML, CSS, JavaScript, React.js, Next.js, Express.js, MongoDB, Mongoose, Digital Marketing and more"
      />
      <section>
        <PageWrapper>
          <AboutHeroSection />
        </PageWrapper>
        <PageWrapper>
          <AllSkills />
        </PageWrapper>
      </section>
    </>
  );
};

export default index;
