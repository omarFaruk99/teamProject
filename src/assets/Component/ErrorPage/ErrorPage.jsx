import { useRouteError } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page" className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center text-2xl font-bold">
        <span>
          <TbFaceIdError size={200} color="red" />
        </span>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
