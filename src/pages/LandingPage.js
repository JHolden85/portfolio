import React from 'react';
import { useParams } from "react-router-dom";
import ProfilePicture from '../components/Landing/ProfilePicture';
import Header from "../components/SiteWide/Header";
import ButtonLink from "../components/SiteWide/ButtonLink";

const LandingPage = function () {

  let {project} = useParams();

  return (
    <>
      <div className="mx-4 md:m-12 h-full">
        <Header className="md:hidden my-8 text-3xl sm:text-4xl">Jeremiah Holden</Header>
        {/* About me */}
        <div className="md:px-6 grid justify-items-stretch grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 md:items-center md:justify-center text-gray-800 select-none">
          <p className="md:row-start-2 text-xl sm:text-2xl md:text-4xl md:text-right text-center p-4 sm:px-4">
          UCI Coding Bootcamp graduate.<br/>
          <span className="bg-green-400 bg-opacity-70">Full stack web developer</span>.<br/>
          Part Time Nerd.
          {project}
          </p>
          
          {/* Profile Picture Component */}
          <div className="px-4 row-start-1 md:row-start-2 justify-self-center md:justify-self-start">
            <ProfilePicture className="rounded-full md:rounded-none" />
          </div>
          
          <div className="flex justify-center mb-8">
            <ButtonLink className="w-full py-4" href="/contact">Contact Me</ButtonLink>
          </div>
        </div>

      </div>
    </>
  );
}

export default LandingPage;