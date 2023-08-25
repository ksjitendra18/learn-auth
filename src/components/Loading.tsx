import Navbar from "./Navbar";
import Spinner from "./Spinner";

const Loading = () => {
  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-center h-[400px] ">
        <Spinner customStyle="animate-spin" w="48" h="48" />
      </div>
    </>
  );
};

export default Loading;
