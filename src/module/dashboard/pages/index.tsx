import { Inter } from "next/font/google";
import { useState } from "react";

import GridViewIcon from "@/icons/GridViewIcon";
import ListViewIcon from "@/icons/ListViewIcon";
import SearchBox from "../components/SearchBox";
import TableBox from "../components/TableBox";
import StatusTab from "../components/StatusTab";
import IconButton from "../components/IconButton";

const inter = Inter({ subsets: ["latin"] });

function Dashboard() {
  const [isActive, setIsActive] = useState(true);
  const [searchText, setSearchText] = useState("");

  return (
    <main
      className={`bg-main-black text-white-blue flex flex-col gap-10 p-7 h-[100vh] w-full ${inter.className}`}
    >
      <div>
        <h2 className={`text-primary-white text-4xl mb-3`}>Markets</h2>
        <h6 className={`leading-7`}>Exit anytime at market prices</h6>
        <h6 className={`leading-7`}>Simple and secure.</h6>
      </div>
      <div className="flex justify-between items-center">
        <SearchBox value={searchText} onChange={setSearchText} />

        <div className="flex items-center gap-4">
          <StatusTab isActive={isActive} onChange={setIsActive} />

          <IconButton>
            <GridViewIcon />
          </IconButton>
          <IconButton>
            <ListViewIcon />
          </IconButton>
        </div>
      </div>
      <div>
        <TableBox />
      </div>
    </main>
  );
}
export default Dashboard;
