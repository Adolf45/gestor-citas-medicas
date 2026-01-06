import React from "react";
export const TodayDateCard = ({
  title = "Citas",
  quantity = 0,
  bgColor = "bg-green-200",
  handleClick,
  prop,
  cancelled,
}) => {
  const StyleHover =
    cancelled === prop ? "w-[400px] scale-110 cursor-not-allowed" : "w-[400px] hover:scale-110 cursor-pointer";
  const OnClick = () => handleClick(prop);
  return (
    <div
      className={
        "flex justify-around items-center mb-5 transition-transform " +
        StyleHover
      }
      onClick={OnClick}
    >
      <div
        className={`${bgColor} py-12 px-20 rounded-2xl flex flex-col justify-items-start gap-4`}
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <span className="text-2xl">{quantity}</span>
      </div>
    </div>
  );
};
