import PTPriceIcon from "@/icons/PTPriceIcon";
import SortIcon from "@/icons/SortIcon";
import YTPriceIcon from "@/icons/YTPriceIcon";
import Image from "next/image";
import React from "react";

const DataList = [
  {
    logo: "/logos/atom.svg",
    name: {
      title: "stATOM",
      label: "26 Dec 2024",
    },
    maturity: {
      title: "26 Sept 2024",
      label: "303 Days",
    },
    underlyingAPY: {
      title: "18.63%",
      label: "$0.778",
    },
    impliedAPY: {
      title: "10.03%",
    },
    longYieldAPY: {
      title: "121.7%",
      label: "$0.05944",
    },
    fixedAPY: {
      title: "10.03%",
      label: "$0.7186",
    },
  },
  {
    logo: "/logos/usdt.svg",
    name: {
      title: "stUSDT",
      label: "26 Dec 2024",
    },
    maturity: {
      title: "26 Sept 2024",
      label: "303 Days",
    },
    underlyingAPY: {
      title: "18.63%",
      label: "$0.778",
    },
    impliedAPY: {
      title: "10.03%",
    },
    longYieldAPY: {
      title: "121.7%",
      label: "$0.05944",
    },
    fixedAPY: {
      title: "10.03%",
      label: "$0.7186",
    },
  },
  {
    logo: "/logos/usdc.svg",
    name: {
      title: "stUSDC",
      label: "26 Dec 2024",
    },
    maturity: {
      title: "26 Sept 2024",
      label: "303 Days",
    },
    underlyingAPY: {
      title: "18.63%",
      label: "$0.778",
    },
    impliedAPY: {
      title: "10.03%",
    },
    longYieldAPY: {
      title: "121.7%",
      label: "$0.05944",
    },
    fixedAPY: {
      title: "10.03%",
      label: "$0.7186",
    },
  },
];

const TableBox = () => {
  return (
    <table className="table-auto w-full border-spacing-y-2 border-separate">
      <thead>
        <tr>
          <StyledTableTH icon={<SortIcon />} title="Name" />
          <StyledTableTH icon={<SortIcon />} title="Maturity" />
          <StyledTableTH
            icon={<SortIcon />}
            title="Underlying APY"
            label="Price"
          />
          <StyledTableTH icon={<SortIcon />} title="Implied APY" />
          <StyledTableTH
            icon={<SortIcon />}
            title="Long Yield APY"
            label="YT Price"
          />
          <StyledTableTH
            icon={<SortIcon />}
            title="Fixed APY"
            label="PT Price"
          />
        </tr>
      </thead>
      <tbody>
        {DataList.map((data, index) => (
          <tr key={index}>
            <StyledTableTD
              highlight
              icon={<Image src={data.logo} alt="logo" width={40} height={40} />}
              title={data.name.title}
              label={data.name.label}
            />
            <StyledTableTD
              title={data.maturity.title}
              label={data.maturity.label}
            />
            <StyledTableTD
              title={data.underlyingAPY.title}
              label={data.underlyingAPY.label}
            />
            <StyledTableTD title={data.impliedAPY.title} />
            <StyledTableTD
              icon={<YTPriceIcon />}
              title={data.longYieldAPY.title}
              label={data.longYieldAPY.label}
              paper="bg-blue-gray"
              spaceBetween
            />
            <StyledTableTD
              icon={<PTPriceIcon />}
              title={data.fixedAPY.title}
              label={data.fixedAPY.label}
              paper="bg-[#1b393c]"
              spaceBetween
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableBox;

const StyledTableTH = ({
  title,
  label,
  icon,
}: {
  title: String;
  label?: String;
  icon?: React.ReactNode;
}) => {
  return (
    <td className={`px-4 border-b-[1.5px] border-white-blue py-2 text-left`}>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          {title && <p className="font-normal">{title}</p>}
          {icon && (
            <button className={`px-1 py-1 rounded-3xl hover:bg-gray-glass`}>
              {icon}
            </button>
          )}
        </div>
        <p className="font-light h-[20px]">{label}</p>
      </div>
    </td>
  );
};

const StyledTableTD = ({
  title,
  label,
  icon,
  highlight,
  paper,
  spaceBetween,
}: {
  title: String;
  label?: String;
  highlight?: Boolean;
  spaceBetween?: Boolean;
  paper?: String;
  icon?: React.ReactNode;
}) => {
  return (
    <th
      className={`px-4 border-b-[1.5px] border-white-blue text-primary-white py-2 text-left bg-gray-glass`}
    >
      <div
        className={`flex gap-3 items-center ${paper} rounded-lg ml-[-15px] px-[6px] py-1`}
      >
        {icon && <button className={`px-2 py-2 rounded-3xl `}>{icon}</button>}
        <div className={`${spaceBetween && "ml-auto pr-2"} `}>
          {title && (
            <p
              className={`font-semibold leading-6 ${
                highlight ? "text-lg" : ""
              } `}
            >
              {title}
            </p>
          )}
          {label && <p className="font-light leading-6 text-[15px]">{label}</p>}
        </div>
      </div>
    </th>
  );
};
