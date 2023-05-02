'use client';
import { useMutation } from 'react-query';
import { signup } from './api';
import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import Button from '@/components/Button';
import { storeUser } from '@/redux/slices/User.slice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

const SignupPage = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const { mutate, data, isLoading } = useMutation({ mutationFn: signup });

  const { register, handleSubmit } = useForm();

  const responseBody = data?.data;

  useEffect(() => {
    if (responseBody?.isAuthenticated) {
      dispatch(storeUser(responseBody));
      router.push('/account');
    }
  }, [responseBody?.isAuthenticated]);

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <h1 className="text-xl text-stone-900 font-bold m-4">eCommerce</h1>
      <div className="w-[320px] border p-4 rounded">
        <form
          onSubmit={handleSubmit((data: any) => {
            mutate(data);
          })}
          className="flex flex-col"
        >
          <input
            className="bg-stone-100 focus:outline-none p-2 rounded my-1"
            type="text"
            id="first_name"
            placeholder="First name"
            {...register('first_name', {
              required: 'First name field is required.',
            })}
          />
          <input
            className="bg-stone-100 focus:outline-none p-2 rounded my-1"
            type="text"
            id="last_name"
            placeholder="Last name"
            {...register('last_name', {
              required: 'Last name field is required.',
            })}
          />
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
            {...register('password', {
              required: 'Password field is required.',
            })}
          />

          <div className="flex justify-between items-center my-1  p-2 rounded bg-stone-100 ">
            <span className="text-sm mx-2 font-bold">Gender</span>
            <div>
              <input
                className="text-sm m-1"
                type="radio"
                id="male"
                value="1"
                {...register('gender', {
                  required: 'Gender field is required.',
                })}
              />
              <label
                className="text-sm mr-2"
                htmlFor="male"
              >
                Male
              </label>
              <input
                className="text-sm m-1"
                type="radio"
                id="female"
                value="0"
                {...register('gender', {
                  required: 'Gender field is required.',
                })}
              />
              <label
                className="text-sm"
                htmlFor="Female"
              >
                Female
              </label>
            </div>
          </div>

          <Button
            isAuthenticated={data?.data.isSuccess}
            isLoading={isLoading}
          >
            <span>Signup</span>
          </Button>
        </form>
        <div className="my-2">
          <span className="text-stone-900 text-sm">Do have an account? </span>
          <Link
            href="/login"
            className="text-stone-900 text-sm font-bold"
          >
            Login now.
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

export default SignupPage;
