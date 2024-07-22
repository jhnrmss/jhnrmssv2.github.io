import NavigationBar from "@/components/NavBar";
import Footer from "../../components/Footer";
import { About, Home } from "@/pages";

const AppLayout = () => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Home />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default AppLayout;
