import { useState } from "react";

const Accordion = (props) => {
  const [data, setData] = useState(props.datas);
  const [isActive, setIsActive] = useState(false);

  const handleToggleActive = () => {
    let activeNew = data.active === 1 ? 0 : 1;
    setData({ ...data, active: activeNew });
    setIsActive(!isActive);
  };

  return (
    <div
      className={`bg-line  mb-3 duration-500  group min-w-[1070px] min-h-[64px]  text-white  ${
        data.active === 1 ? "is-active bg-black" : ""
      } ${isActive ? "is-active bg-[#5a5555c0]" : ""}`}
    >
      <div
        onClick={handleToggleActive}
        className="  flex items-center hover:bg-[#5a5555c0] hover:duration-[0.6s] cursor-pointer group-[.is-active]:duration-500 "
      >
        <div className="w-full text-[30px] p-5  ">{data.question}</div>

        <div className="text-4xl rotate-90  cursor-pointer  group-[.is-active]:rotate-[135deg] p-5 text-[40px]">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="15"
              y1="3.76822e-08"
              x2="15"
              y2="30"
              stroke="white"
              stroke-width="2"
            />
            <line
              x1="30"
              y1="15"
              x2="-1.19209e-07"
              y2="15"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
      <div className="absolute translate-x-[-10px] w-full bg-black h-[1px] max-h-0 group-[.is-active]:max-h-[3px]"></div>
      <div className=" transition-[max-height] duration-[1s]">
        <div
          className={`transition-[height] duration-1000 ease-in-out  max-h-0  px-5 overflow-hidden  flex items-center  group-[.is-active]:min-h-[100px] group-[.is-active]:max-h-[100px] min-w-[1070px] text-[20px]`}
        >
          My name is Lun Dev
        </div>
      </div>
    </div>
  );
};
export default Accordion;
