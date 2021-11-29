import { Outlet } from "react-router-dom";
import StyleProvider from 'App/StyleProvider';
import Header from './Header';
import { Grid, Row, Col } from 'react-flexbox-grid';

export interface LayoutProps {}

const Layout = (props: LayoutProps) => (
  <StyleProvider>
    <Header />

    <Grid>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Grid>
  </StyleProvider>
);

export default Layout;
