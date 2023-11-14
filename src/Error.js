import { Fragment } from "react";
import { Helmet } from "react-helmet";

const Error = () => {
  return (
    <Fragment>
      <Helmet>
        <title>404 Error | Ralph Albert Caraan Portfolio</title>
      </Helmet>
    <div className=" flex items-center justify-center h-screen">
        <p className="text-3xl font-semibold text-white">404 Error | Page not found.</p>
    </div>
    </Fragment>
  );
};

export default Error;
