import Footer from "./Footer";
import Navbar from "./Navbar";
import Whatsapp from "./Whatsapp";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default Layout;
