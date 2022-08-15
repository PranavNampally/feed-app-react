import { useContext } from 'react';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  // const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Vite LOGO</div>
      {/* create  nav bar
       */}
      {/* <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <a href="#">Home</a>
          </li>
          <li className={classes.navItem}>
            <a href="#">About</a>
          </li>
          <li className={classes.navItem}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav> */}
      <nav>
        <ul>
          <li>
            Title
          </li>
          <li>
            User Prof
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
