'use client';
import { IStoreState } from '@/redux/Store';
import { IPopupMenuControllerState } from '@/redux/types';
import { useDispatch, useSelector } from 'react-redux';

import { toggleAccountPageMenu } from '@/redux/slices/PopupMenuController.slice';
import { TfiClose } from 'react-icons/tfi';
import Link from 'next/link';
import { BsPersonCircle, BsReceipt } from 'react-icons/bs';
import { motion } from 'framer-motion';

const PopupMenuController = () => {
  const { accountPageMenu } = useSelector(
    (state: IStoreState) => state.PopupMenuControllerReducer
  ) as IPopupMenuControllerState;

  const dispatch = useDispatch();

  if (accountPageMenu) {
    return (
      <div className=" bg-stone-800/80 w-screen h-screen absolute sm:hidden flex items-center justify-center flex-col p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="max-w-[320px] w-full bg-white shadow-md relative rounded"
        >
          <TfiClose
            onClick={() => dispatch(toggleAccountPageMenu())}
            className="cursor-pointer absolute right-0 top-0 m-3"
            size={16}
          />
          <section className="my-8">
            <Link
              onClick={() => dispatch(toggleAccountPageMenu())}
              href="/account"
              className="flex items-center text-lg rounded m-2 hover:bg-stone-200 px-2 py-1"
            >
              <BsPersonCircle className="mx-1" />
              <Link
                href="/account"
                className="font-bold mx-1 "
              >
                Account
              </Link>
            </Link>
            <div className="flex flex-col ">
              <Link
                onClick={() => dispatch(toggleAccountPageMenu())}
                href="/account/profile"
                className="hover:bg-stone-200 px-2 py-1 rounded sm:mx-10 mx-6 text-start"
              >
                Profile
              </Link>

              <Link
                onClick={() => dispatch(toggleAccountPageMenu())}
                href="/account/addresses"
                className="hover:bg-stone-200 px-2 py-1 rounded sm:mx-10 mx-6 text-start"
              >
                Addresses
              </Link>

              <Link
                onClick={() => dispatch(toggleAccountPageMenu())}
                href="/account/password"
                className="hover:bg-stone-200 px-2 py-1 rounded sm:mx-10 mx-6 text-start"
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
        </motion.div>
      </div>
    );
  }

  return <></>;
};

export default PopupMenuController;
