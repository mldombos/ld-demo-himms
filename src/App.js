import QRCode from "./components/qrCode";
import ldlogo from "./ld-light.png";
import himms from "./himms.png";
import toggle from "./toggle_thumbsup.png";
import "./App.css";
import { useFlags } from "launchdarkly-react-client-sdk";
import Header from "./components/header";
import Login from "./components/login";

function App() {
  const { qrcode, logoversion } = useFlags();

  return (
    <div className="App h-screen grid grid-cols-3 grid-rows-3 bg-ldls bg-cover bg-no-repeat">
      <header className="App-header grid row-start-1 col-span-3">
        <Header />      
      </header>
      <div className="body grid col-span-3 row-start-2 place-items-center">
        {logoversion ? (
          <img src={toggle} className="mx-auto max-h-96" alt="logo" />  
        ) : (  
            <img src={himms} className="mx-auto max-h-96" alt="logo" />
        )}  
        </div>
        <div className="body grid row-start-3 col-span-3 place-items-center">
        {qrcode ? <QRCode /> : <Login />}
      </div>
    </div>
  );
}

export default App;
