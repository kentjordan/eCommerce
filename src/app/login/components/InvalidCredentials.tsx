import { BiErrorCircle } from "react-icons/bi";

const InvalidCredentials = ({
  isSuccess,
}: {
  isSuccess: boolean | undefined;
}) => {
  if (isSuccess === undefined) {
    return <></>;
  } else {
    if (!isSuccess) {
      return (
        <div className=' flex items-center border text-stone-50 text-sm border-red-600 rounded p-2 bg-red-400'>
          <BiErrorCircle size={24} className='mx-1'></BiErrorCircle>
          <span className=''>
            Invalid <b>email</b> or <b>password</b>.{" "}
          </span>
        </div>
      );
    }
  }
  return <></>;
};

export default InvalidCredentials;
