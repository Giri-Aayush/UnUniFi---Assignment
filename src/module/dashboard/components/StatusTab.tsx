import React from "react";
import clsx from "clsx";

const selectedButtonStyle = "bg-primary-white text-main-black";
const mainButtonStyle =
  "px-6 py-2 rounded-3xl transition duration-[350ms] ease-[ease-in]";

const StatusTab = ({
  isActive,
  onChange,
}: {
  isActive: boolean;
  onChange: (value: boolean) => void;
}) => {
  return (
    <div className={`bg-gray-glass rounded-3xl`}>
      <button
        className={clsx({
          [mainButtonStyle]: true,
          [selectedButtonStyle]: isActive,
        })}
        type="button"
        onClick={() => onChange(true)}
      >
        Active
      </button>
      <button
        className={clsx({
          [mainButtonStyle]: true,
          [selectedButtonStyle]: !isActive,
        })}
        type="button"
        onClick={() => onChange(false)}
      >
        Inactive
      </button>
    </div>
  );
};

export default StatusTab;
