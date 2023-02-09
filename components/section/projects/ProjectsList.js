import { TextWrapper } from "@/utils/TextWrapper";
import Projects from "../recentProjects/Projects";
const ProjectsList = () => {
  return (
    <>
      <div className="my-20">
        <TextWrapper>
          <div className="my-4">
            <h2 className="text-3xl font-bold sm:text-4xl text-center">
              Recent Projects
            </h2>
            <p className="text-center py-4 text-lg text-black dark:text-white">
              Here is the list of some of my recent projects
            </p>
          </div>
          <Projects />
        </TextWrapper>
      </div>
    </>
  );
};

export default ProjectsList;
