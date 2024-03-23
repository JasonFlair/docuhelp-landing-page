import { useNavigate } from "react-router-dom";
import { ConnectWithDocuhelp } from "./ConnectWithDocuhelp";
/* eslint-disable jsx-a11y/anchor-is-valid */

function Footer() {
  const navigate = useNavigate();
  function navigateToHome () {
    navigate('/');
  }
  return (
    <footer className="main-section bg-docuhelpFooterBg text-white">
      <section className="go-to-links flex flex-col lg:flex-row lg:justify-between">
        <section className="flex mb-8 flex-col gap-4">
          <h4>Address</h4>
          <p>Lekki, Lagos - Nigeria</p>
        </section>
        <section className="flex mb-8 flex-col gap-4">
          <h4 className="text-lg">Company</h4>
          <ul className="text-sm">
            <li><a>3d7 Technologies</a></li>
            <li><a>Products</a></li>
            <li><a>Legal</a></li>
          </ul>
        </section>
      </section>
      <hr style={{borderTop: '1px solid rgba(255, 255, 255, 0.30)'}}></hr>
      <section className="mt-6 flex flex-col lg:flex-row items-start">
        <section className="flex flex-col lg:flex-row gap-6 sm:mr-auto mb-6 lg:w-1/2 items-start lg:items-center">
          <img
            alt="docuhelp logo" src="../images/docuhelp-logo-without-text.svg" className="h-3/5 cursor-pointer"
            onClick={navigateToHome}
          />
          <div className="text-sm">© 2023 docuhelp.ai | Security | Your Privacy | Terms</div>
        </section>
        <ConnectWithDocuhelp/>
      </section>
    </footer>
  );
}

export default Footer;
