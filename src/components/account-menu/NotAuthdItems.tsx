import { toggleAccountMenu } from '@/redux/slices/AccountMenu';
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
        toggleAccountMenu={() => dispatch(toggleAccountMenu())}
      >
        Login
      </Item>
      <Item
        Icon={<MdContentPaste />}
        linkTo="/signup"
        toggleAccountMenu={() => dispatch(toggleAccountMenu())}
      >
        Signup
      </Item>
    </ul>
  );
};

export default NotAuthdItems;
