function MobileNavBar (props) {
  function closeNavBar() {
    const {setNavbarIsOpen} = props;
    setNavbarIsOpen((navbarIsOpen) => !navbarIsOpen);
  }
  return (
    <nav className="fixed w-screen h-screen top-0 left-0  z-20 flex flex-col items-center gap-12 bg-white text-black main-section">
      <div className="w-full flex items-center mb-auto">
        <div className="cursor-pointer mr-auto">
          <img alt="logo" src="./images/docuhelp-logo.svg" />
        </div>
        <div className="cursor-pointer" onClick={closeNavBar}>
          <img alt="close icon" src="./images/close-line.svg" />
        </div>
      </div>
      <div className="flex flex-col gap-8 justify-center">
        <p className="text-center cursor-pointer">Blog</p>
        <button className="bg-docuhelpBlue-100 text-white button w-[300px] h-[54px]">
          Get started
        </button>
      </div>
    </nav>
  )
}

export default MobileNavBar