import React from "react";

const CustomTooltip = ({
  active,
  payload,
  customLabel1,
  customLabel2,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip backdrop-blur-sm shadow-sm bg-slate-50 p-2 dark:bg-dark-gray dark:text-white border dark:border-gray-500">
        <p className="flex gap-3">
          <span>{customLabel1} : </span>
          <span className="font-semibold">{label}</span>
        </p>

        <p className="flex gap-3">
          <span>{customLabel2} : </span>
          <span className="font-semibold">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
