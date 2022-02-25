import Footer from "./app/Footer";
import Navbar from "./app/Navbar";

const Layout = ({ children }) => {
  return (
    <section className="content">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
