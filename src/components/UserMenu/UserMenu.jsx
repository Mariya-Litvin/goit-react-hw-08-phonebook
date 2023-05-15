import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { UserMenuWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserMenuWrapper>
  );
};
