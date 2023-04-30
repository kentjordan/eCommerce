import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div className='h-full w-full text-4xl flex flex-col justify-center items-center'>
      <div>
        <Skeleton
          className='h-30 w-30'
          height={100}
          width={500}
          duration={0.5}></Skeleton>
      </div>
    </div>
  );
};

export default Loading;
