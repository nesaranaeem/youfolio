import { NextSeo } from "next-seo";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const FullProjectDetails = ({ data }) => {
  const {
    projectName,
    projectSummery,
    mainImageURL,
    ImageURL2,
    ImageURL3,
    projectFeatures1,
    projectFeatures2,
    projectFeatures3,
    projectFeatures4,
    projectFeatures5,
    githubRepo,
    liveDemo,
  } = data;
  const images = [
    {
      original: mainImageURL,
      thumbnail: mainImageURL,
    },
    {
      original: ImageURL2,
      thumbnail: ImageURL2,
    },
    {
      original: ImageURL3,
      thumbnail: ImageURL3,
    },
  ];
  return (
    <>
      <NextSeo title={`${projectName}`} description={`${projectSummery}`} />

      <section className="mt-20">
        <div className="flex flex-col justify-center justify-items-center items-center">
          <div class="flex flex-col justify-center justify-items-center items-center w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="text-center my-2">
              <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
                  Project Name: {projectName}
                </h5>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
                  Screenshots
                </h5>
                <ImageGallery items={images} />
              </div>
              <p class="mb-3 font-medium text-black dark:text-white">
                {projectSummery}
                <h2 className="text-xl font-bold text-black dark:text-white">
                  Features
                </h2>

                <div>
                  <ul class="my-2 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="flex justify-start items-center w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                       {projectFeatures1}
                    </li>
                    <li class="flex justify-start items-center w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                       {projectFeatures2}
                    </li>
                    <li class="flex justify-start items-center w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      {projectFeatures3}
                    </li>
                    <li class="flex justify-start items-center w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                       {projectFeatures4}
                    </li>
                    <li class="flex justify-start items-center w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                       {projectFeatures5}
                    </li>
                    <div className="my-3 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center justify-center">
                      <a
                        href={liveDemo}
                        target="_blank"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Live Demo
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href={githubRepo}
                        target="_blank"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Github Repository
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FullProjectDetails;
