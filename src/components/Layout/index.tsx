import NavigationBar from "@/components/NavBar";
import Footer from "../Footer";

const AppLayout = () => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className="container max-w-7xl px-2 sm:px-6 lg:px-8">
        <h1 className="font-bold text-primary">Hello World!</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default AppLayout;