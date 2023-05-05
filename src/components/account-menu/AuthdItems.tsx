import { toggleNavbarUserMenu } from '@/redux/slices/PopupMenuController.slice';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { IoPersonCircle } from 'react-icons/io5';
import { MdSettings, MdContentPaste, MdLogout } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';
import { IStoreState } from '@/redux/Store';
import { IUserReducerState } from '@/redux/types';

interface IAuthdItemsArgs {
  first_name: string;
  last_name: string;
}

const AuthdItems = () => {
  const dispatch = useDispatch();

  const {
    user: { first_name, last_name },
  } = useSelector((state: IStoreState) => state.UserReducer) as IUserReducerState;

  return (
    <>
      <Link
        href="/account/profile"
        className="flex items-center cursor-pointer hover:bg-stone-700 hover:rounded"
        onClick={() => dispatch(toggleNavbarUserMenu())}
      >
        <IoPersonCircle
          size={50}
          className="text-stone-200 mx-2"
        ></IoPersonCircle>
        <span className="mx-2 font-bold">
          {first_name} {last_name}
        </span>
      </Link>
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ ease: 'anticipate' }}
        className="mt-6"
      >
        <ul>
          <Item
            linkTo="/account"
            Icon={
              <MdSettings
                size={20}
                className="text-stone-400"
              />
            }
            toggleNavbarUserMenu={() => dispatch(toggleNavbarUserMenu())}
          >
            Settings
          </Item>
          <Item
            linkTo="/account/purchase"
            Icon={
              <MdContentPaste
                size={20}
                className="text-stone-400"
              />
            }
            toggleNavbarUserMenu={() => dispatch(toggleNavbarUserMenu())}
          >
            Purchase
          </Item>
          <Item
            linkTo="/account/logout"
            Icon={
              <MdLogout
                size={20}
                className="text-stone-400"
              />
            }
            toggleNavbarUserMenu={() => {
              dispatch(toggleNavbarUserMenu());
            }}
          >
            Logout
          </Item>
        </ul>
      </motion.div>
    </>
  );
};

export default AuthdItems;
