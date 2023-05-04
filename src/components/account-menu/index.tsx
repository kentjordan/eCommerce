import { IStoreState } from '@/redux/Store';
import { IUserReducerState } from '@/redux/types';
import { useSelector } from 'react-redux';
import AuthdItems from './AuthdItems';
import NotAuthdItems from './NotAuthdItems';
import { motion } from 'framer-motion';

const AccountMenuItems = () => {
  const { isAuthenticated } = useSelector((state: IStoreState) => state.UserReducer) as IUserReducerState;
  const { isOpened } = useSelector((state: IStoreState) => state.AccountMenuReducer);

  if (isOpened)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-[256px] rounded absolute right-0 bg-stone-800 shadow-xl m-1 p-2 text-stone-100  "
      >
        {isAuthenticated ? <AuthdItems /> : <NotAuthdItems />}
      </motion.div>
    );
  return <></>;
};

export default AccountMenuItems;
