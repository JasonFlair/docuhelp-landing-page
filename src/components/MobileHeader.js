import { useNavigate } from "react-router-dom";
import MobileNavBar from "./MobileNavBar";
import { useState } from "react";
export default function MobileHeader () {
  const navigate = useNavigate();
  function navigateToHome () {
    navigate('/');
  }
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  function openNavBar () {
    setNavbarIsOpen(true);
  }
  return (
    <header className="lg:hidden h-8">
      <div className="flex">
        <div className="mr-auto cursor-pointer" onClick={navigateToHome}>
          <img alt="logo" src="./images/docuhelp-logo.svg" />
        </div>
        <div className="cursor-pointer" onClick={openNavBar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z" fill="black"/>
          </svg>
        </div>
      </div>
      {navbarIsOpen ? (
        <MobileNavBar setNavbarIsOpen={setNavbarIsOpen}/>
      ) : null}
    </header>
  );
}