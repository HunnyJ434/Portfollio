import Nav from "../nav";
import { Outlet } from "react-router-dom";

function Layout() {

  return (
    <div className="App">
        <Nav/>
        <div className="page w-[100%] h-[100%] absolute">
          <Outlet />
        </div>
    </div>
  );
}

export default Layout;
