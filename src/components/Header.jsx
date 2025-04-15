import React, { useState } from "react";
// import RandomUser from "./RandomUser";

import Dropdown from "./Dropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Header() {
  const [showUsers, setShowUsers] = useState(false);
  return (
    <div className="flex flex-wrap justify-between items-center w-full bg-neutral-900  text-white p-4">
      <div className="flex items-center space-x-4 md:space-x-6">
        <Dropdown />
        <nav className="hidden md:block">
          <ul className="flex list-none gap-4 cursor-pointer">
            <li className="hover:text-gray-400">Overview</li>
            <li
              onClick={() => setShowUsers(!showUsers)}
              className="hover:text-gray-400"
            >
              Customers
            </li>
            <li className="hover:text-gray-400">Products</li>
            <li className="hover:text-gray-400">Settings</li>
          </ul>
        </nav>
        {showUsers }
      </div>

      <div className="flex items-center space-x-2 w-full md:w-auto mt-2 md:mt-0">
        <Input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded-lg w-full md:w-auto"
        />
        <Button className="px-3 py-1 rounded-lg bg-white text-black cursor-pointer hover:bg-purple-900">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Header;
