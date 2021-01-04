import './Layout.css';

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) =>
  <div className="Layout">
    <Header />
    <main className="Layout-main">
      {children}
    </main>
    <Footer />
  </div>
;

export default Layout;
