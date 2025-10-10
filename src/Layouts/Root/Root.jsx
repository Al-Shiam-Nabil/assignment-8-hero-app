import { Outlet, useNavigation } from "react-router";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CardError from "../../Pages/Error/CardError";
import { createContext, useState } from "react";

export const InstalledContext = createContext([]);

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  const [installedApp, setInstalledApp] = useState([]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      {isNavigating && <CardError></CardError>}
      <div className="flex-1">
        <InstalledContext value={[installedApp, setInstalledApp]}>
          <Outlet></Outlet>
        </InstalledContext>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
