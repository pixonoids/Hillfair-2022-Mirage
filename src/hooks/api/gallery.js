import { useQuery } from 'react-query';
import { getGallery } from '../../services/api/gallery';

export const useGetGallery = () => {
  const queryKey = ['gallery'];
  return useQuery(queryKey, getGallery);
};
