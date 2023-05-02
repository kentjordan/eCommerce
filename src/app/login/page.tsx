'use client';
import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { login } from './api';

import InvalidCredentials from './components/InvalidCredentials';
import Button from './components/Button';

import { useSelector } from 'react-redux';
import { IStoreState } from '@/redux/Store';
import { IUserReducerState } from '../account/types';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { storeUser } from '@/redux/slices/User.slice';

import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const selectorFn = (state: IStoreState) => state.UserReducer;

  const { register, handleSubmit } = useForm();

  const { data, mutate, isLoading } = useMutation(login);

  const responseBody = data?.data;

  useEffect(() => {
    if (responseBody?.isAuthenticated) {
      dispatch(storeUser(responseBody));
      router.push('/account');
    }
  }, [responseBody?.isAuthenticated]);

  return (
    <div className="flex flex-col h-full justify-center items-center p-16">
      <InvalidCredentials isSuccess={responseBody?.isAuthenticated} />
      <h1 className="text-xl text-stone-900 font-bold m-4">eCommerce</h1>
      <div className="w-[320px] border p-4 rounded">
        <form
          onSubmit={handleSubmit((data: unknown) => mutate(data))}
          className="flex flex-col"
        >
          <input
            className="bg-stone-100 focus:outline-none p-2 rounded my-1"
            type="text"
            id="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email field is required.',
            })}
          />
          <input
            className="bg-stone-100 focus:outline-none p-2 rounded my-1"
            type="password"
            id="password"
            placeholder="Password"
            {...register('password')}
          />
          <Button
            isLoading={isLoading}
            isAuthenticated={responseBody?.isAuthenticated}
          />
        </form>
        <div className="my-2">
          <span className="text-stone-900 text-sm">Don&apos;t have an account? </span>
          <Link
            href="/signup"
            className="text-stone-900 text-sm font-bold"
          >
            Create now.
          </Link>
        </div>
      </div>
      <Link
        href="/"
        className="text-sm my-4"
      >
        Go back home
      </Link>
    </div>
  );
};

export default LoginPage;
