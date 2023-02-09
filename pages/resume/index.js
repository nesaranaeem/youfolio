import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { PageWrapper } from "@/utils/PageWrapper";
import { NextSeo } from "next-seo";

const index = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <>
      <NextSeo
        nofollow={true}
        title="Resume"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in interdum est. Duis elementum tempor nulla sed maximus. Nullam vel rutrum neque. Pellentesque nunc libero, porta in eros eu, imperdiet congue diam. Aliquam tristique eros vel mi cursus, non maximus."
      />
      <section className="mt-20">
        <PageWrapper>
          <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
              <div>
                <Viewer
                  fileUrl="/assets/pdf/resume.pdf"
                  plugins={[defaultLayoutPluginInstance]}
                />
              </div>
            </Worker>
          </div>
        </PageWrapper>
      </section>
    </>
  );
};

export default index;
