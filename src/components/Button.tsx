import { PulseLoader } from 'react-spinners';

const Button = ({
  isLoading,
  isAuthenticated,
  children,
}: {
  isLoading: boolean;
  isAuthenticated: boolean | unknown;
  children?: React.ReactNode;
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

  return <button className="bg-stone-900 text-stone-100 font-bold my-2 rounded p-1">{children}</button>;
};

export default Button;
