import ld from '../ld-white-wide.png'


export default function Header() {
  return (
    <div className="mx-auto content-center w-full bg-ldgray p-4 lg:p-4 px-7 mt-8 lg:px-28 shadow-2xl">
      <div>
      <img src={ld} className="mx-auto max-h-30" alt="logo" />
      </div>
      <div className="text-xl pb-4 lg:text-4xl">
        <h1>Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-br from-ldyellow to-lddblue">SREcon</span>!</h1>
      </div>      
    </div>
  );
}
