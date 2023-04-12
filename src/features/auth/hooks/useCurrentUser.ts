import { useQuery } from 'react-query';
import { getCurrentUser } from '../api/getCurrentUser';

export const useCurrentUser = () => {
  return useQuery('authUser', getCurrentUser)
}