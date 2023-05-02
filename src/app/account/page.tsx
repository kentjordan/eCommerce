'use client';
import { BsPencilSquare } from 'react-icons/bs';
import Image from 'next/image';
import Sidebar from './components/Sidebar';

import { IStoreState } from '@/redux/Store';
import { IUserReducerState } from './types';

import { useSelector } from 'react-redux';

const AccountPage = () => {
  const {
    user: { email, first_name, last_name, gender },
  } = useSelector((state: IStoreState) => state.UserReducer) as IUserReducerState;
  
  return (
    <div className="h-full w-full flex  justify-center items-center bg-stone-50 ">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-[500px] px-8 py-6 rounded shadow bg-white mx-8">
          <div className="flex flex-col">
            <span className="font-bold">My Profile </span>
            <span className="text-stone-500 text-sm">Manage and protect your account</span>
            <hr className="my-4" />
          </div>
          <div className="flex items-center flex-col my-6">
            <Image
              className="rounded-full"
              src="https://picsum.photos/100/100"
              width={100}
              height={100}
              alt="Profile photo"
            />
            <div className="flex items-center">
              <h1 className="font-bold my-4">
                {first_name} {last_name}
              </h1>
              <BsPencilSquare className="mx-2 text-cyan-700 cursor-pointer" />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-end">
              <span className="my-3 text-sm text-stone-500">Email</span>
              <span className="my-3 text-sm text-stone-500">Phone Number</span>
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
