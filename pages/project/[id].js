import FullProjectDetails from "@/components/section/cards/FullProjectDetails";
import { TextWrapper } from "@/utils/TextWrapper";
import axios from "axios";
import { useRouter } from "next/router";

function Project({ data }) {
  return (
    <>
      <TextWrapper>
        <FullProjectDetails key={data._id} data={data} />
      </TextWrapper>
    </>
  );
}

Project.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const res = await axios.get(
    `https://personal-site-server.vercel.app/project/${id}`
    /* if you want to make it dynamic put your live server url here eg. https://server/project/${id} */
  );
  return { data: res.data };
};
export default Project;
