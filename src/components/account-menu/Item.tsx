import Link from 'next/link';
import { ReactNode } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

interface IItem {
  linkTo: string;
  Icon: JSX.Element;
  toggleNavbarUserMenu: () => void;
  children: ReactNode;
}

const Item = ({ linkTo, toggleNavbarUserMenu, Icon, children }: IItem) => {
  return (
    <Link
      className="flex items-center justify-between p-2 hover:bg-stone-700 hover:rounded"
      href={linkTo}
      onClick={toggleNavbarUserMenu}
    >
      <div className="flex items-center">
        {Icon}
        <span className="mx-4 text-sm">{children}</span>
      </div>
      <MdArrowForwardIos className="text-stone-300" />
    </Link>
  );
};

export default Item;
