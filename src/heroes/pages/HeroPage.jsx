import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  const { id, ...rest } = useParams();
  const hero = getHeroById(id);

  if (!hero) {
    return <Navigate to='/marvel' />;
  }

  return <div>HeroPage {id}</div>;
};
