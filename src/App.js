import QRCode from "./components/qrCode";
import ldlogo from "./ld-light.png";
import srecon from "./srecon.png";
import toggle from "./toggle_thumbsup.png";
import "./App.css";
import { useFlags } from "launchdarkly-react-client-sdk";
import Header from "./components/header";
import Login from "./components/login";

function App() {
  const { qrcode, logoversion } = useFlags();

  return (
    <div className="App h-screen bg-ldls bg-cover bg-no-repeat">
      <header className="App-header">
        <Header />
        
        {logoversion ? (
          <img src={toggle} className="App-pulse max-h-80" alt="logo" />
        ) : (
          <div className="bg-white p-4 px-7 mt-4 lg:px-14 shadow-2xl">
            <img src={srecon} className="max-h-72" alt="logo" />
          </div>
        )}
        {qrcode ? <QRCode /> : <Login />}
      </header>
    </div>
  );
}

export default App;
