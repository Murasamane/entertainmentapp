/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Search from "../../Search/Search";
import SideMenu from "../../SideMenu/SideMenu";
import styles from "./AppLayout.module.css";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className={styles.mainContainer}>
      <header>
        <Search />
      </header>
      <aside>
        <SideMenu />
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
