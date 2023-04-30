import Link from "next/link";
import { BsPersonCircle, BsSearch, BsCart } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='flex justify-between w-full bg-stone-900 text-stone-100 items-center px-2 absolute'>
      {/* <ul className='flex'>
        <li className='m-2 text-sm'>Contact</li>
        <li className='m-2 text-sm'>About us</li>
        <li className='m-2 text-sm'>Privacy Policy</li>
      </ul> */}

      <div className='m-2'>
        <Link href='/' className='text-2xl font-bold'>
          eCommerce
        </Link>
        <span className='text-sm mx-2 text-stone-400'>by Kent Jordan</span>
      </div>

      <div>
        <ul className='flex'>
          <li className='m-2'>
            <BsSearch />
          </li>
          <li className='m-2'>
            <Link href='/account'>
              <BsPersonCircle />
            </Link>
          </li>
          <li className='m-2'>
            <BsCart />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
