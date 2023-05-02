import { IStoreState } from '@/redux/Store';
import { toggleAccountMenu } from '@/redux/slices/AccountMenu';
import { IUserReducerState } from '@/redux/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

import { MdSettings, MdArrowForwardIos, MdContentPaste, MdLogout, MdLogin } from 'react-icons/md';

import { useSelector, useDispatch } from 'react-redux';

const withAuth = (Component: () => JSX.Element, isAuthenticated: boolean) => {
  const IsNotAuthComponent: () => JSX.Element = () => {
    const dispatch = useDispatch();
    return (
      <ul>
        <li className="mb-4">
          <Link
            className="flex items-center justify-between"
            href="/login"
            onClick={() => dispatch(toggleAccountMenu())}
          >
            <div className="flex items-center">
              <MdLogin
                size={24}
                className="text-stone-400"
              />{' '}
              <span className="mx-4 font-bold">Login</span>
            </div>
            <MdArrowForwardIos className="text-stone-300" />
          </Link>
        </li>
        <li className="mt-4">
          <Link
            href="/signup"
            className="flex items-center justify-between"
            onClick={() => dispatch(toggleAccountMenu())}
          >
            <div className="flex items-center">
              <MdContentPaste
                size={24}
                className="text-stone-400"
              />
              <span className="mx-4  font-bold">Signup</span>
            </div>
            <MdArrowForwardIos className="text-stone-300" />
          </Link>
        </li>
      </ul>
    );
  };
  return ((props: any) => {
    if (isAuthenticated) return <Component />;

    return <IsNotAuthComponent />;
  }) as FunctionComponent;
};

const AuthdItems = () => {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      transition={{ ease: 'anticipate' }}
      className="mt-10"
    >
      <ul>
        <li className="my-4">
          <Link
            className="flex items-center justify-between"
            href="/account"
            onClick={() => dispatch(toggleAccountMenu())}
          >
            <div className="flex items-center">
              <MdSettings
                size={24}
                className="text-stone-400"
              />{' '}
              <span className="mx-4 font-bold">Setting</span>
            </div>
            <MdArrowForwardIos className="text-stone-300" />
          </Link>
        </li>
        <li className="my-4">
          <Link
            href="/account/purchase"
            className="flex items-center justify-between"
            onClick={() => dispatch(toggleAccountMenu())}
          >
            <div className="flex items-center">
              <MdContentPaste
                size={24}
                className="text-stone-400"
              />
              <span className="mx-4 font-bold ">Purchase</span>
            </div>
            <MdArrowForwardIos className="text-stone-300" />
          </Link>
        </li>
        <li className="mt-4">
          <Link
            href="/account/logout"
            className="flex items-center justify-between"
            onClick={() => dispatch(toggleAccountMenu())}
          >
            <div className="flex items-center">
              <MdLogout
                size={24}
                className="text-stone-400"
              />
              <span className="mx-4  font-bold">Logout</span>
            </div>
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

const AccountMenu = () => {
  const {
    user: { first_name, last_name },
    isAuthenticated,
  } = useSelector((state: IStoreState) => state.UserReducer) as IUserReducerState;

  const { isOpened } = useSelector((state: IStoreState) => state.AccountMenuReducer);

  const AccountMenuItems = withAuth(AuthdItems, isAuthenticated);

  if (isOpened)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-[256px] rounded absolute right-0 bg-stone-800 shadow-xl m-1 px-4 py-6 text-stone-100  "
      >
        {isAuthenticated && (
          <div className="flex items-center my ">
            <Image
              className="rounded-full"
              src="https://picsum.photos/100/100"
              width={56}
              height={56}
              alt="Profile photo"
            />
            <span className="mx-4 font-bold">
              {first_name} {last_name}
            </span>
          </div>
        )}
        {/* <hr className=" border-stone-500" /> */}

        <AccountMenuItems />
      </motion.div>
    );

  return <></>;
};

export default AccountMenu;
