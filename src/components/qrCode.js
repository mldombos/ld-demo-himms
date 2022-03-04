import QRCode from "react-qr-code";
// import { withLDConsumer } from "launchdarkly-react-client-sdk";

//Change QRURL to the URL where you'll be hosting this app
const QRURL = "https://codyde.github.io/ld-demo-srecon/";

const qrCodeHome = () => {  
  return (
    <div className="bg-white pb-4 px-3 my-4 lg:px-7 shadow-2xl">
      <div className="mt-4 qr-wrapper">
        <QRCode size="128" value={QRURL} />
      </div>
    </div>
  )     
};

export default qrCodeHome;