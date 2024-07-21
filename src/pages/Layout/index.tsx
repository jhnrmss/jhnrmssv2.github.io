import NavigationBar from "@/components/NavBar";

const AppLayout = () => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className="container mx-auto sm:px-6 lg:px-8">
        <h1 className="font-bold">Hello World!</h1>
      </main>
    </>
  );
};
export default AppLayout;
