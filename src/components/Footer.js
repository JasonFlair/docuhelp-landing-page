import { useNavigate } from "react-router-dom";
import { ConnectWithDocuhelp } from "./ConnectWithDocuhelp";
/* eslint-disable jsx-a11y/anchor-is-valid */

function Footer() {
  const navigate = useNavigate();
  function navigateToHome () {
    navigate('/');
  }
  return (
    <footer className="main-section footer">
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
        <section className="flex mb-8 flex-col gap-4">
          <h4 className="text-lg">Consumers</h4>
          <ul className="text-sm">
            <li><a>Vaults</a></li>
            <li><a href="/rides">Rides</a></li>
            <li><a>Marketplace</a></li>
            <li><a>Restaurants & Bars</a></li>
            <li><a>Social Media</a></li>
            <li><a>Package Delivery</a></li>
          </ul>
        </section>
        <section className="flex mb-8 flex-col gap-4">
          <h4 className="text-lg">Captains</h4>
          <ul className="text-sm">
            <li><a>Become a Captain</a></li>
            <li><a>Become a Dispatch</a></li>
            <li><a>What’s New</a></li>
            <li><a>Captain Center</a></li>
            <li><a href="/share-ownership">Share Ownership</a></li>
          </ul>
        </section>
        <section className="flex mb-8 flex-col gap-4">
          <h4 className="text-lg">Businesses</h4>
          <ul className="text-sm">
            <li><a href="/wynk-for-merchants">Wynk for Business</a></li>
            <li><a>Wynk Vault</a></li>
            <li><a href="/rides">Wynk Ride</a></li>
            <li><a href="/lifestyle" target="_blank" rel="noreferer">Wynk Lifestyle</a></li>
            <li><a href="/lifestyle">Wynk Socials</a></li>
          </ul>
        </section>
        <section className="flex mb-8 flex-col gap-4">
          <h4 className="text-lg">Resources</h4>
          <ul className="text-sm">
            <li><a href="/contact-us">Help Centre</a></li>
            <li><a>Learning Centre</a></li>
            <li><a>Partner with us</a></li>
            <li><a href="/wynk-terms-and-conditions">Terms and Conditions</a></li>
            <li><a href="/wynk-privacy-policy">Privacy Policy</a></li>
            <li><a>Cookie Policy</a></li>
            <li><a>IMS Policy</a></li>
          </ul>
        </section>
      </section>
      <hr style={{borderTop: '1px solid rgba(255, 255, 255, 0.30)'}}></hr>
      <section className=" flex flex-col lg:flex-row items-start">
        <section className="flex flex-col lg:flex-row gap-6 sm:mr-auto mb-6 lg:w-1/2 items-start lg:items-center">
          <img
            alt="wynk logo" src="../images/wynk_logo_2.png" className="h-3/5 cursor-pointer"
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
