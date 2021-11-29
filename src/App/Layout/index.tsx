import { Outlet } from "react-router-dom";
import StyleProvider from 'App/StyleProvider';
import Header from './Header';


export interface LayoutProps {}

const Layout = (props: LayoutProps) => (
  <StyleProvider>
    <Header />

    <Outlet />
  </StyleProvider>
);

export default Layout;
