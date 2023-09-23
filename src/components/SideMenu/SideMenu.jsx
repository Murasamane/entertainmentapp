import styles from "./SideMenu.module.css";
import { Link, NavLink } from "react-router-dom";
function SideMenu() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideNavigation}>
        <Link to="/app">
          <img src="../../assets/logo.svg" alt="" />
        </Link>
        <ul>
          <li>
            <NavLink
              to="/app"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inActive
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 0H8C8.6 0 9 0.4 9 1V8C9 8.6 8.6 9 8 9H1C0.4 9 0 8.6 0 8V1C0 0.4 0.4 0 1 0ZM1 11H8C8.6 11 9 11.4 9 12V19C9 19.6 8.6 20 8 20H1C0.4 20 0 19.6 0 19V12C0 11.4 0.4 11 1 11ZM19 0H12C11.4 0 11 0.4 11 1V8C11 8.6 11.4 9 12 9H19C19.6 9 20 8.6 20 8V1C20 0.4 19.6 0 19 0ZM12 11H19C19.6 11 20 11.4 20 12V19C20 19.6 19.6 20 19 20H12C11.4 20 11 19.6 11 19V12C11 11.4 11.4 11 12 11Z"
                />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="movies"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inActive
              }
            >
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="tvseries"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inActive
              }
            >
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="bookmarks"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inActive
              }
            >
              <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" />
              </svg>
            </NavLink>
          </li>
        </ul>
      </div>
      <img
        src="../../assets/image-avatar.png"
        alt="avatar"
        className={styles.avatarImage}
      />
    </div>
  );
}

export default SideMenu;
