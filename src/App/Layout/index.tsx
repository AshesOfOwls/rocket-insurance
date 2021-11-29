import { Outlet, Link } from "react-router-dom";
import StyleProvider from 'App/StyleProvider';

export interface LayoutProps {}

const Layout = (props: LayoutProps) => (
  <StyleProvider>
    <Link to="/rating">Rating Information</Link>

    <Outlet />
  </StyleProvider>
);

export default Layout;
