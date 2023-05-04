import Link from 'next/link';
import { BsPersonCircle, BsSearch, BsCart } from 'react-icons/bs';
import AccountMenuItems from './account-menu';
import { IStoreState } from '@/redux/Store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAccountMenu } from '@/redux/slices/AccountMenu';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isOpened } = useSelector((state: IStoreState) => state.AccountMenuReducer);

  return (
    <>
      <div className="flex justify-between w-full bg-stone-900 text-stone-100 items-center px-2  z-50">
        {/* <ul className='flex'>
        <li className='m-2 text-sm'>Contact</li>
        <li className='m-2 text-sm'>About us</li>
        <li className='m-2 text-sm'>Privacy Policy</li>
      </ul> */}

        <div className="m-2">
          <Link
            href="/"
            className="text-2xl font-bold"
          >
            eCommerce
          </Link>
          <span className="text-sm mx-2 text-stone-400">by Kent Jordan</span>
        </div>

        <div className="">
          <ul className="flex relative">
            <li className="m-2">
              <BsSearch />
            </li>
            <li className="m-2">
              <BsCart />
            </li>
            <li className="m-2 relative">
              <BsPersonCircle
                className="cursor-pointer"
                onClick={() => dispatch(toggleAccountMenu())}
              />
            </li>
          </ul>
        </div>
      </div>
      <AccountMenuItems />
    </>
  );
};

export default Navbar;
