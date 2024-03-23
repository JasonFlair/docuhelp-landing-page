import { useNavigate } from "react-router-dom";
import { ConnectWithDocuhelp } from "./ConnectWithDocuhelp";
import SubscriptionField from "./SubscriptionField";
/* eslint-disable jsx-a11y/anchor-is-valid */

function Footer() {
  const navigate = useNavigate();
  function navigateToHome () {
    navigate('/');
  }
  return (
    <footer className="main-section bg-docuhelpFooterBg text-white">
      <section className="go-to-links flex flex-col lg:flex-row lg:justify-between">
        <section className="flex mb-8 flex-col gap-4 sm:w-2/3 lg:w-1/4">
          <h4 className="w-4/5 lg:w-full text-[32px] lg:text-[40px] font-bold">Stay In Touch With Us</h4>
          <p>The latest Docuhelp news, articles, and resources, sent straight to your inbox every month.</p>
          <SubscriptionField/>
        </section>
        <section className="flex mb-8 flex-col gap-4">
          <h4 className="text-[16px] font-bold">Company</h4>
          <ul className="text-sm lg:text-base">
            <li><a>3d7 Technologies</a></li>
            <li><a>Products</a></li>
            <li><a>Legal</a></li>
          </ul>
        </section>
        <section className="flex mb-8 flex-col gap-4">
          <h4 className="text-[16px] font-bold">Contact Us</h4>
          <div className="flex gap-2 text-sm">
            <img alt="icon" src="../images/mail-outline.svg"/>
            <div>help@docuhelp.ai</div>
          </div>
          <div className="flex gap-2 text-sm lg:text-base">
            <img alt="icon" src="../images/location-outline.svg"/>
            <div>Manchester, United Kingdom</div>
          </div>
          <div className="flex gap-2 text-sm lg:text-base">
            <img alt="icon" src="../images/call-outline.svg"/>
            <div>+1 544312378</div>
          </div>
        </section>
        <section className="lg:w-[30%] flex mb-8 flex-col gap-4">
          <img
            alt="docuhelp logo"
            src="../images/docuhelp-logo.svg"
            width={183}
          />
          <p className="font-bold text-sm lg:text-base">Write business documents.</p>
          <p
            className="text-sm lg:text-base"
          >DocuHelp may produce inaccurate information about people, places, or facts and may also display inaccurate or offensive information that doesn't represent 3d7 Technologies views.</p>
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
