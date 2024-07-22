import NavigationBar from "@/components/NavBar";
import Footer from "../Footer";
import { Home } from "@/pages";

const AppLayout = () => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className="container max-w-7xl px-2 sm:px-6 lg:px-8">
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default AppLayout;
