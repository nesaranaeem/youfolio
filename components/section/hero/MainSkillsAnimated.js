/* type writer effect for main skills set */

import Typewriter from "typewriter-effect";
const MainSkillsAnimated = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Wordpress",
          "Digital Marketing Expert",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default MainSkillsAnimated;
