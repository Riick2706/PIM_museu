import { Visible } from 'react-grid-system';
import HeaderDesktop from './HeaderDesktop';
import { Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Visible md lg xl xxl xxxl  >
        <HeaderDesktop />
      </Visible>
      <Visible xs sm  >
        <></>
      </Visible>

      <Outlet />
    </>
  );
};

export default Navbar;