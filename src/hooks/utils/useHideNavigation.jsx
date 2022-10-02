import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNavVisible } from '../../store/ui';

export default function useHideNavigation() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNavVisible(false));
    return () => {
      dispatch(setNavVisible(true));
    };
  }, []);

  return null;
}
