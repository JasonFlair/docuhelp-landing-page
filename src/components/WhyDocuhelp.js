import { useState } from "react";


export default function WhyDocuhelp() {
  const whyUseDocuhelp = [
    {
      title: "Industry Focused",
      text:
        `Backend prompts can be focused mainly on your industry so results are more precise.`,
    },
    {
      title: "Access to Backends",
      text:
        `Access to a backend system to see what prompts staffs are sending and results generated.`,
    },
    {
      title: "Trained on your Data",
      text:
        `Models can be built that's trained solely on your company data and documents. Analytics and fine tuning of models based on specific use cases.`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const whyUseDocuhelpArray = whyUseDocuhelp.map((reason, index) => (
        <div
          key={index}
          className="w-full border-docuhelpBlue-100 border-[1px] rounded-lg  mb-6 p-4"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <p className="text-[16px] font-semibold">{reason.title}</p>
            <span>
              <img alt="dropdown icon" src="../images/drop-down-icon.svg" />
            </span>
          </div>
          {activeIndex === index && (
            <p className="mt-4 text-black whitespace-pre-wrap">{reason.text}</p>
          )}
        </div>
      ));

  return (
    <div className="w-full lg:w-1/2 mx-auto rounded-2xl">
      {whyUseDocuhelpArray}
    </div>
  );
};
