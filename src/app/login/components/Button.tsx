import { PulseLoader } from 'react-spinners';

const Button = ({
  isLoading,
  isAuthenticated,
}: {
  isLoading: boolean;
  isAuthenticated: boolean | unknown;
}) => {
  if (isLoading)
    return (
      <button
        disabled
        className="bg-stone-900 text-stone-500 font-bold my-2 rounded p-1"
      >
        <PulseLoader
          color="#fff"
          loading={isLoading}
          size={8}
        />
      </button>
    );

  if (isAuthenticated) {
    return (
      <button
        disabled
        className="bg-stone-900 text-stone-500 font-bold my-2 rounded p-1"
      >
        <PulseLoader
          color="#fff"
          size={8}
        />
      </button>
    );
  }

  return <button className="bg-stone-900 text-stone-100 font-bold my-2 rounded p-1">Login</button>;
};

export default Button;
