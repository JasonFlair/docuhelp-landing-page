import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import MobileHeader from "../components/MobileHeader";
import WebHeader from "../components/WebHeader";
import WhyDocuhelp from "../components/WhyDocuhelp";

/**
 * Renders the landing page of the DocuHelp application.
 */
export default function LandingPage() {
  return (
    <main>
      <header className="main-section fixed z-30 bg-white">
        <WebHeader />
        <MobileHeader/>
      </header>
      <Hero />
      <section className="main-section bg-docuhelpBg">
        <div className="bg-[#ffffff] flex flex-col gap-8 px-6 py-8 lg:px-12 lg:py-12 rounded-xl lg:rounded-3xl">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24">
            <div className="lg:w-1/2">
              <h1 className="text-[32px] lg:text-[52px] w-2/3 font-bold">
                Get Started for free
              </h1>
              <p className="text-base lg:text-lg text-[#4B4B4E]">
                Transforming Blank Pages into Captivating Narratives DocuHelp AI empowers businesses to discover their distinctive storytelling style
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex gap-2 items-center mb-2">
                <img alt="green dot cta" src="./images/green-dot.svg" />
                <p className="font-semibold text-[#4B4B4E]">Try Docuhelp Now!</p>
              </div>
              <div className="flex gap-2 items-center">
                <img alt="green dot cta" src="./images/checkbox-circle-fill.svg" />
                <p className="text-[#4B4B4E]">No credit card required</p>
              </div>
              <div className="flex gap-2 items-center">
                <img alt="green dot cta" src="./images/checkbox-circle-fill.svg" />
                <p className="text-[#4B4B4E]">Unlimited access</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <button className="bg-docuhelpBlue-100 text-white button w-[186px] h-[62px]">
              Get started
            </button>
            <button className="button text-docuhelpBlue-100 bg-docuhelpBorder-200 border border-docuhelpBlue-100 w-[186px] h-[62px]">
              Sign in
            </button>
          </div>
        </div>
      </section>
      <section className="main-section bg-docuhelpBg">
        <div className="bg-[#ffffff] flex flex-col pl-4 pt-8 lg:pl-12 lg:pt-12 rounded-xl lg:rounded-3xl">
          <div className="flex flex-col lg:w-3/4 gap-8 mb-4 lg:mb-0">
            <div className="lg:w-2/3">
              <h1 className="text-[32px] lg:text-[52px] font-extrabold">
                WRITE WITH DOCUHELP
              </h1>
              <p className="text-base lg:text-lg text-[#4B4B4E] w-full">
                Generate professional graded documents, reports, proposal, sales pitch in a matter of minutes and empower your team to work together in real time, ensuring accuracy and efficiency. No more email chains or confusion—just smooth, simultaneous collaboration.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <button className="bg-docuhelpBlue-100 text-white button w-[186px] h-[62px]">
                Get started
              </button>
            </div>
          </div>
          <div className="w-full lg:w-3/4 lg:h-1/2 ml-0 lg:ml-[273px] lg:mt-[-320px]">
            <img
              className="rounded-br-xl lg:rounded-br-3xl"
              alt="guy on his laptop" src="./images/guy-on-laptop.svg" />
          </div>
        </div>
      </section>
      <section className="main-section bg-docuhelpBg">
        <div className="bg-[#ffffff] flex flex-col lg:flex-row items-center gap-6 pl-6 pr-6 pt-8 lg:pl-12 lg:pr-12 lg:pt-12 rounded-3xl">
          <div className="flex flex-col lg:w-1/2 gap-8 mb-4 lg:mb-0">
            <div className="">
              <hr style={{borderTop: '3px solid rgba(26, 10, 215, 1)'}}></hr>
              <h1 className="text-[24px] lg:text-[40px] text-docuhelpBlue-100 font-extrabold">
                USE DOCUHELP TO WRITE DOCUMENTS FOR YOUR BUSINESS, WORK REPORT, AND PROPOSALS FOR YOUR NEXT PROJECT! 
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <button className="bg-docuhelpBlue-100 text-white button w-[186px] h-[62px]">
                Get started
              </button>
            </div>
          </div>
          <div className="lg:h-1/2 ">
            <img
              className="lg:rounded-br-3xl"
              alt="lady with laptop" src="./images/lady-with-laptop.svg" />
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3">
          <HowItWorks />
        </div>
        <div
          className="py-4 px-6 md:py-8 md:px-[60px] lg:px-[50px] lg:w-1/3 bg-docuhelpBg flex flex-col gap-12">
          <div>
            <img
              alt="document" src="./images/document-image.svg"
              className="mb-4"
            />
            <h2 className="mb-4 font-bold text-[28px] lg:text-[32px]">Write Quick Accurate Business Letter</h2>
            <p className="font-semibold lg:font-medium text-[16px] lg:text-[22px]">With docuhelp.ai users can write detailed formal letters with 100% accurecy</p>
          </div>
          <button className="bg-docuhelpBg text-docuhelpBlue-100 font-bold button w-[200px] h-[65px] border-[1px] border-docuhelpBlue-100">
            Start Writing
          </button>
        </div>
      </section>
      <section className="main-section bg-docuhelpBg">
        <h1 className="text-[40px] lg:text-[64px] text-docuhelpBlue-100 font-extrabold text-center mt-12 mb-12">
          Why Docuhelp?
        </h1>
        <WhyDocuhelp /> {/* Interactive component that displays the reasons why Docuhelp is the best choice for writing documents. */}
      </section>
      <Footer />
    </main>
  );
}