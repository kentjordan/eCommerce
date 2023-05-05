import { toggleNavbarUserMenu } from '@/redux/slices/PopupMenuController.slice';
import { MdLogin, MdContentPaste } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import Item from './Item';

const NotAuthdItems = () => {
  const dispatch = useDispatch();

  return (
    <ul>
      <Item
        Icon={<MdLogin />}
        linkTo="/login"
        toggleNavbarUserMenu={() => dispatch(toggleNavbarUserMenu())}
      >
        Login
      </Item>
      <Item
        Icon={<MdContentPaste />}
        linkTo="/signup"
        toggleNavbarUserMenu={() => dispatch(toggleNavbarUserMenu())}
      >
        Signup
      </Item>
    </ul>
  );
};

export default NotAuthdItems;
