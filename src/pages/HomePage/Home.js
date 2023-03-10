import React from "react";
import { Nav } from "../../components/HomePageComponents/index";
import bg from "./bg2.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <>
      <Nav />
      <div className="flex flex-row-reverse justify-around px-44 pt-10">
        <div>
          <img src={bg} className=" w-full " />
        </div>
        <div>
          <h1 className="text-left text-7xl font-bold mt-10 text-gray-800">
            Welcome to <br /> File <span className="text-indigo-500">Hive</span>
          </h1>
          <p className="mt-4">
            Say goodbye to cluttered desktops and disorganized folders. Our file
            management system is designed to help you stay organized and manage
            your files with ease.Streamline your workflow and improve
            productivity with our file management system
          </p>
          {isAuthenticated ? (
            <>
              <button
                type="button"
                className="relative mt-4 inline-flex items-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => navigate("/dashboard")}
              >
                <span>Go to Dashboard </span>
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="relative mt-4 inline-flex items-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => navigate("/login")}
              >
                <span>Get Started</span>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
