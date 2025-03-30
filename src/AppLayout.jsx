import React from "react";
import CreateWallets from "./pages/CreateWallets";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
const AppLayout = () => {
  return (
    <div className="h-[100vh] bg-[url(/src/assets/Home.jpg)] bg-cover">
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
        <Home />
        {/* <CreateWallets /> */}
      </div>
    </div>
  );
};

export default AppLayout;
