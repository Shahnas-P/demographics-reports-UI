import React, { useState, useEffect } from "react";
import { Dot, Plus, Settings, Calendar, ChevronDown } from "lucide-react";
import Button from "./Button";

const TargetHead = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 400);
    };

    checkScreenSize(); 
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="border-b-2 border-slate-300 flex flex-1 justify-between p-2">
      {/* Left Section */}
      <div className="flex justify-center items-center gap-2">
        <h3 className="text-md sm:text-lg font-semibold whitespace-nowrap">
          Target Demographics
        </h3>
        <Button
          text={"Beta"}
          style={"text-blue-700 text-sm font-semibold sm:h-5"}
          icon={<Dot />}
        />
      </div>

      <div className="relative flex flex-col sm:flex-row">
        {isSmallScreen ? (
          <>
            {/* Dropdown Button for Small Screens */}
            <button
              className="flex items-center border px-2 py-1 rounded-md"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <ChevronDown className="text-slate-600" size={18} />
            </button>

            {/* Dropdown Content */}
            <div
              className={`absolute right-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md p-2 ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col">
                <button className="flex items-center gap-2 py-1 text-slate-600">
                  <Calendar size={20} />
                  Calendar
                </button>
                <button className="flex items-center gap-2 py-1 text-slate-600">
                  <Settings size={20} />
                  Settings
                </button>
                <Button
                  text={"Add User"}
                  icon={<Plus size={14} />}
                  style={"bg-blue-800 text-white text-xs font-semibold mt-2"}
                />
              </div>
            </div>
          </>
        ) : (
      
          <div className="flex py-1">
            <Calendar className="text-slate-600" size={20} />
            <Settings className="mx-2 text-slate-600" size={20} />
            <Button
              text={"Add User"}
              icon={<Plus size={14} />}
              style={
                "bg-blue-800 text-white sm:text-xs font-semibold whitespace-nowrap"
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TargetHead;
