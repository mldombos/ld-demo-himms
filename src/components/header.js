import ld from '../ld-white-wide.png'


export default function Header() {
  return (
    <div className='grid  w-full bg-ldgray shadow-2xl place-items-center'>
    <div className="mx-auto w-full p-4 lg:p-4 px-7 lg:px-28">
      <div>
      <img src={ld} className="mx-auto max-h-30" alt="logo" />
      </div>
      <div className="text-2xl pb-4 lg:text-6xl">
        <h1>Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-br from-ldyellow to-lddblue">HIMMS</span>!</h1>
      </div>      
    </div>
    </div>
  );
}
