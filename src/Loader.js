import loadgif from "./assets/images/loader-icon8.gif";

const Loader = () => {
  return (
    <div className="fixed flex items-center justify-center w-full h-screen bg-black z-50">
      <img className="w-14" src={loadgif} alt="Loader" />
    </div>
  );
};

export default Loader;
