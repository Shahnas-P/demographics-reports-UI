import { useState } from "react";
import {
  AlignJustify,
  ChevronDown,
  Search,
  Settings2,
  CloudUpload,
} from "lucide-react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/slice";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div className=" z-30  mt-3 m-2 ml-3 flex flex-1 flex-row items-center sm:ml-10 md:ml-15 pb-5 border-b-2 border-slate-200 sticky top-0 bg-white   ">
      <AlignJustify
        onClick={handleToggleSidebar}
        size={30}
        className="text-slate-600 flex sm:hidden "
      />

      <h1 className="mx-5 text-xl font-bold ml-8 lg:text-3xl ">
        Demographics Report
      </h1>

      <ul className="flex flex-1 justify-end  bg-slate-100 sm:bg-white sm:border-0  rounded-full pr-2  border border-slate-300  items-center relative">
        <li className="relative ">
          <button
            className="text-slate-600 md:hidden  sm:hidden flex"
            onClick={() => setShowDropdown(!showDropdown)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
          >
            <ChevronDown size={25} />
          </button>

          {showDropdown && (
            <div className="absolute top-8 right-0 bg-white border border-gray-300 shadow-md rounded-md w-40 p-2 max-w-[400px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-1 border border-gray-400 rounded-md mb-2"
              />
              <Button
                text={"Cutomize"}
                style={"w-full mb-2"}
                icon={<Settings2 size={15} />}
                iconSize={25}
              />

              <Button
                text={"Add New"}
                icon={<CloudUpload />}
                iconSize={25}
                size={15}
                style={"w-full mb-2"}
                textSize={"text-md"}
              />
            </div>
          )}
        </li>

        <Search className="hidden sm:block" size={20} />
        <li className="hidden sm:block mx-3">
          <Button
            text={"Cutomize"}
            icon={<Settings2 size={15} />}
            iconSize={25}
            style={"px-2 py-1 "}
          />
        </li>
        <li className="hidden sm:block">
          <Button
            text={"Add New"}
            icon={<CloudUpload />}
            size={15}
            textSize={"text-md"}
            iconSize={25}
            style={"px-2 py-1 "}
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
