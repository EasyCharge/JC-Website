import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-y-auto relative">
        <Outlet />
      </main>
      {location.pathname ===
      "/JC-Website/products" ? null : location.pathname ===
        "/JC-Website/about-us" ? null : location.pathname ===
        "/JC-Website/impressum" ? null : (
        <Footer className="mt-auto" />
      )}
    </div>
  );
}

export default AppLayout;
