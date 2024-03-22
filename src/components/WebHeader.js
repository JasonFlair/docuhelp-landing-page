import { useNavigate } from "react-router-dom";

export default function WebHeader() {
  const navigate = useNavigate();
  function navigateToHome () {
    navigate('/');
  }

  return (
    <header className="header hidden lg:flex md:flex-row md:items-center h-8">
      <div className="flex items-center gap-6 mr-auto">
        <div className="cursor-pointer" onClick={navigateToHome}>
          <img alt="logo" src="./images/docuhelp-logo.svg" />
        </div>
        <nav>
          <ul className="flex gap-4">
            <li className="cursor-pointer">Support</li>
            <li className="cursor-pointer">Pricing</li>
          </ul>
        </nav>
      </div>
      <nav className="flex gap-4">
        <button className="bg-docuhelpBlue-100 text-white button w-[136px] h-[48px]">
          Get started
        </button>
        <button className="button text-docuhelpBlue-100 bg-docuhelpBorder-200 w-[136px] h-[48px]">
          Sign in
        </button>
      </nav>
    </header>
  );
}