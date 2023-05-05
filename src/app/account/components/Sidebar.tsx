import Link from 'next/link';
import React from 'react';
import { BsPersonCircle, BsReceipt } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { toggleAccountPageMenu } from '@/redux/slices/PopupMenuController.slice';
import { useDispatch } from 'react-redux';
const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <FiMenu
        onClick={() => {
          dispatch(toggleAccountPageMenu());
        }}
        size={24}
        className="sm:hidden flex my-8 cursor-pointer"
      />
      <div className="sm:flex hidden flex-col">
        <section className="my-3">
          <div className="flex items-center text-lg rounded m-2 hover:bg-stone-200 px-2 py-1">
            <BsPersonCircle className="mx-1" />
            <Link
              href="/account"
              className="font-bold mx-1"
            >
              Account
            </Link>
          </div>
          <div className="flex flex-col ">
            <Link
              href="/account/profile"
              className="hover:bg-stone-200 px-2 py-1 rounded sm:mx-10 sm:text-start text-center"
            >
              Profile
            </Link>

            <Link
              href="/account/addresses"
              className="hover:bg-stone-200 px-2 py-1 rounded sm:mx-10 sm:text-start text-center"
            >
              Addresses
            </Link>

            <Link
              href="/account/password"
              className="hover:bg-stone-200 px-2 py-1 rounded sm:mx-10 sm:text-start text-center"
            >
              Change Password
            </Link>
          </div>
        </section>
        <section className="my-4 flex items-center text-lg rounded m-2 hover:bg-stone-200 px-2 py-1">
          <div className="flex items-center text-lg">
            <BsReceipt className="mx-1" />
            <Link
              href="/account/purchase"
              className="font-bold mx-1"
            >
              Purchase
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sidebar;
