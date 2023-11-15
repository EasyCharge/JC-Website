import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import Navbar from "../components/Navbar";
import { FirebaseContext } from "../context/FirebaseContext";

function AppLayout() {
  return (
    <FirebaseContext>
      <div className="h-full overflow-hidden">
        <Header />
        <main className="relative min-h-full overflow-auto">
          <Outlet />
        </main>
      </div>
    </FirebaseContext>
  );
}

export default AppLayout;
