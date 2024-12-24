import React, { useEffect, useState } from "react";
import money from "../assets/greenmoney.png";
import friends from "../assets/friends.png";
import daily from "../assets/daily.png";
import blockchain from "../assets/blockchain.png";
import home from "../assets/home.png";
import { useLocation, useNavigate } from "react-router-dom";
import AirDrop from "../assets/blockchain.png";

function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentScreen, setCurrentScreen] = useState("/");

  useEffect(() => {
    setCurrentScreen(location.pathname);
  }, [location]);

  return (
    <nav className="fixed px-[6px] text-white bottom-2 left-4 right-4 rounded-lg bg-black flex justify-around items-center h-[76px] z-50">
      <div
        onClick={() => navigate("/")}
        className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg ${
          currentScreen === "/" ? "bg-black" : "bg-gray-900"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <img className="w-7 h-7 object-contain" src={home} alt="Home" />
          <p className="text-xs text-center">Home</p>
        </div>
      </div>
      <div
        onClick={() => navigate("/earn")}
        className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg ${
          currentScreen === "/earn" ? "bg-black" : "bg-gray-900"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <img className="w-7 h-7 object-contain" src={money} alt="Earn" />
          <p className="text-xs text-center">Earn</p>
        </div>
      </div>
      <div
        onClick={() => navigate("/shares")}
        className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg ${
          currentScreen === "/shares" ? "bg-black" : "bg-gray-900"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <img className="w-7 h-7 object-contain" src={friends} alt="Referrals" />
          <p className="text-xs text-center">Referrals</p>
        </div>
      </div>
      <div
        onClick={() => navigate("/daily")}
        className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg ${
          currentScreen === "/earn" ? "bg-black" : "bg-gray-900"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <img className="w-7 h-7 object-contain" src={daily} alt="daily" />
          <p className="text-xs text-center">Daily</p>
        </div>
      </div>
      <div
        onClick={() => navigate("/AirDrop")}
        className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg ${
          currentScreen === "/earn" ? "bg-black" : "bg-gray-900"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <img className="w-7 h-7 object-contain" src={AirDrop} alt="daily" />
          <p className="text-xs text-center">Airdrop</p>
        </div>
      </div>
    </nav>
  );
}

export default BottomNavigation;
