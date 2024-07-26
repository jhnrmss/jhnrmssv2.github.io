import { Toaster } from "react-hot-toast";
import AppLayout from "./pages/Layout";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <AppLayout />
    </>
  );
}

export default App;
