import MobileHeader from "../components/MobileHeader";
import WebHeader from "../components/WebHeader";

export default function LandingPage() {
  return (
    <main>
      <header className="main-section">
        <WebHeader />
        <MobileHeader/>
      </header>
      <section className="main-section bg-docuhelpBorder-100">
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
          <div className="flex flex-col lg:flex-row gap-4">
            <button className="bg-docuhelpBlue-100 text-white button w-[186px] h-[62px]">
              Get started
            </button>
            <button className="button text-docuhelpBlue-100 bg-docuhelpBorder-200 border border-docuhelpBlue-100 w-[186px] h-[62px]">
              Sign in
            </button>
          </div>
        </div>
      </section>
      <section className="main-section bg-docuhelpBorder-100">
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
      <section className="main-section bg-docuhelpBorder-100">
        <div className="bg-[#ffffff] flex flex-col lg:flex-row items-center pl-6 pr-6 pt-8 lg:pl-12 lg:pr-0 lg:pt-12 rounded-3xl">
          <div className="flex flex-col lg:w-3/4 gap-8 mb-4 lg:mb-0">
            <div className="lg:w-2/3">
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
          <div className=" w-3/4 lg:h-1/2 ">
            <img
              className="lg:rounded-br-3xl"
              alt="lady with laptop" src="./images/lady-with-laptop.svg" />
          </div>
        </div>
      </section>
    </main>
  );
}