import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import ShowItems from "../ShowItems/ShowItems";
import { ThreeCircles } from "react-loader-spinner";

const Home = () => {
  const { isLoading, userFolders, userFiles } = useSelector(
    (state) => ({
      isLoading: state.fileFolders.isLoading,
      userFolders: state.fileFolders.userFolders.filter(
        (folder) => folder.data.parent === "root"
      ),
      userFiles: state.fileFolders.userFiles.filter(
        (file) => file.data.parent === "root"
      ),
    }),
    shallowEqual
  );

  const createdFiles =
    userFiles && userFiles.filter((file) => file.data.url === null);
  const uploadedFiles =
    userFiles && userFiles.filter((file) => file.data.data === null);

  return (
    <>
      {isLoading ? (
        <>
          <div className="flex align-items-center justify-center mt-5">
            <ThreeCircles
              height="100"
              width="100"
              color="#3949AB"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </div>
        </>
      ) : (
        <>
          <div className="col-md-12 w-100">
            <>
              {userFolders.length > 0 && (
                <ShowItems
                  title={"Created Folders"}
                  items={userFolders}
                  Type="folder"
                />
              )}

              {createdFiles.length > 0 && (
                <ShowItems
                  title={"Created Files"}
                  Type="file"
                  items={userFiles.filter((file) => file.data.url === null)}
                />
              )}

              {uploadedFiles.length > 0 && (
                <ShowItems
                  title={"Uploaded Files"}
                  Type="file"
                  items={userFiles.filter((file) => file.data.data === null)}
                />
              )}
            </>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
