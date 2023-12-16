import loadgif from "./assets/images/loadgif.gif";

const Loader = () => {
  return (
    <div className="fixed flex items-center justify-center w-full h-screen bg-black z-50">
      <img className="w-16" src={loadgif} alt="Loader" />
    </div>
  );
};

export default Loader;
