import QRCode from "react-qr-code";
// import { withLDConsumer } from "launchdarkly-react-client-sdk";

//Change QRURL to the URL where you'll be hosting this app
const QRURL = "https://mldombos.github.io/ld-demo-himms/";

const qrCodeHome = () => {  
  return (
    <div className="mx-auto pb-4 px-3 my-4 lg:px-7 shadow-2xl">
      <div className="mt-4 qr-wrapper">
        <QRCode size="225" value={QRURL} />
      </div>
    </div>
  )     
};

export default qrCodeHome;