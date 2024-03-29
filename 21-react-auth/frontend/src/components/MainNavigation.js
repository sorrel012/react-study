import { NavLink, useNavigate, useRouteLoaderData } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';
import { logout } from '../pages/Logout';

function MainNavigation() {
  const navigate = useNavigate();

  const token = useRouteLoaderData('token');

  const logoutHandler = () => {
    logout();
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
          {!token && (
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Authentication
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
