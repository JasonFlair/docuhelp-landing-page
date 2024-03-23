function MobileNavBar (props) {
  function closeNavBar() {
    const {setNavbarIsOpen} = props;
    setNavbarIsOpen((navbarIsOpen) => !navbarIsOpen);
  }
  return (
    <nav className="fixed w-screen h-screen top-0 left-0  z-20 flex flex-col items-center gap-12 bg-white text-black main-section">
      <div className="w-full flex items-center">
        <div className="cursor-pointer mr-auto">
          <img alt="logo" src="./images/docuhelp-logo.svg" />
        </div>
        <div className="cursor-pointer" onClick={closeNavBar}>
          <img alt="close icon" src="./images/close-line.svg" />
        </div>
      </div>
      <div className="flex justify-center">
        
      </div>
    </nav>
  )
}

export default MobileNavBar