import Link from "next/link";
import { BsPersonCircle, BsReceipt } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className='flex flex-col'>
      <section className='my-3'>
        <div className='flex items-center text-lg'>
          <BsPersonCircle className='mx-1' />
          <Link href='/account' className='font-bold mx-1'>
            Account
          </Link>
        </div>
        <ul className='mx-8'>
          <li className='text-stone-500'>
            <Link href='/account/pofile'>Profile</Link>
          </li>
          <li className='text-stone-500'>
            <Link href='/account/addresses'>Addresses</Link>
          </li>
          <li className='text-stone-500'>
            <Link href='/account/password'>Change Password</Link>
          </li>
        </ul>
      </section>
      <section className='my-3'>
        <div className='flex items-center text-lg'>
          <BsReceipt className='mx-1' />
          <Link href='/account/purchase' className='font-bold mx-1'>
            Purchase
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
