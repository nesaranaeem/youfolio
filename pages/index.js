import HeroSection from "@/components/section/hero/HeroSection";
import { PageWrapper } from "@/utils/PageWrapper";
import MainSkills from "@/components/section/skills/skills/MainSkills";
import { NextSeo } from "next-seo";
import RecentProjects from "@/components/section/recentProjects/RecentProjects";
import RecentNews from "@/components/section/recentNews/RecentNews";
import Reviews from "@/components/section/reviews/Reviews";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Home"
        description="I am Nesar Ahmed Naeem. I specialize in both front-end and back-end development, with a particular focus on building efficient and robust applications 🤷‍♂️ My field of Interest's are building efficient and robust applications and also in areas related to Javascript ♡, and I have deep working experience with Digital Marketing."
      />
      <PageWrapper>
        <HeroSection />
      </PageWrapper>
      <PageWrapper>
        <MainSkills />
      </PageWrapper>
      <PageWrapper>
        <RecentProjects />
      </PageWrapper>
      <PageWrapper>
        <RecentNews />
      </PageWrapper>
      <PageWrapper>
        <Reviews />
      </PageWrapper>
    </>
  );
}
