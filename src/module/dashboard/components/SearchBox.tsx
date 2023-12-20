import React, { useId } from "react";
import SearchIcon from "@/icons/SearchIcon";

const SearchBox = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const searchBoxId = useId();
  return (
    <div
      className={`flex gap-2 border-2 border-white-blue w-fit rounded-lg px-3 py-2`}
    >
      <label htmlFor={searchBoxId}>
        <SearchIcon />
      </label>
      <input
        type="text"
        id={searchBoxId}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        className={`bg-transparent min-w-[450px] placeholder:text-white-blue text-white-blue`}
        placeholder="Search name or paste address"
      />
    </div>
  );
};

export default SearchBox;
