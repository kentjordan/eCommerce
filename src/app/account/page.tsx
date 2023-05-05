'use client';
import { BsPencilSquare } from 'react-icons/bs';
import Image from 'next/image';
import PopupMenuController from './components/PopupMenuController';

import { IStoreState } from '@/redux/Store';
import { IUserReducerState } from './types';

import { useSelector } from 'react-redux';
import { IoPersonCircle } from 'react-icons/io5';
import Sidebar from './components/Sidebar';

const AccountPage = () => {
  const {
    user: { email, first_name, last_name, gender },
  } = useSelector((state: IStoreState) => state.UserReducer) as IUserReducerState;

  return (
    <div className="h-full w-full flex justify-center items-center bg-stone-50 ">
      <PopupMenuController />
      <div className="flex w-full   sm:flex-row flex-col sm:items-start items-center justify-center">
        <Sidebar />
        <div className="flex flex-col max-w-[500px] m-8 sm:m-0 w-full p-4 rounded shadow bg-white mx-4">
          <div className="flex flex-col">
            <span className="font-bold">My Profile </span>
            <span className="text-stone-500 text-sm">Manage and protect your account</span>
            <hr className="my-4" />
          </div>
          <div className="flex items-center flex-col my-6">
            <IoPersonCircle
              size={100}
              className="text-stone-200"
            ></IoPersonCircle>
            <div className="flex items-center">
              <h1 className="font-bold my-2">
                {first_name} {last_name}
              </h1>
              <BsPencilSquare className="mx-2 text-cyan-700 cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-end">
              <span className="my-3 text-sm text-stone-500">Email</span>
              <span className="my-3 text-sm text-stone-500">Phone #</span>
              <span className="my-3 text-sm text-stone-500">Gender</span>
            </div>
            <div className="flex flex-col mx-4">
              <span className="my-3 text-sm">{email}</span>
              <div className="my-3 flex items-center">
                <span className=" text-sm">09123456789</span>
                <BsPencilSquare className="mx-2 text-cyan-700 cursor-pointer" />
              </div>
              <form
                className="my-3 text-sm flex"
                action=""
                method="post"
              >
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    defaultChecked={!!gender}
                  />
                  <label
                    className="mx-1"
                    htmlFor="male"
                  >
                    Male
                  </label>
                </div>
                <div className="mx-4">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    defaultChecked={!gender}
                  />
                  <label
                    className="mx-1"
                    htmlFor="female"
                  >
                    Female
                  </label>
                </div>
              </form>
            </div>
          </div>
          <button className="px-4 py-2 mt-8 text-sm rounded text-stone-100 bg-stone-900">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
