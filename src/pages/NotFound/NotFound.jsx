import { Link } from 'react-router-dom';
import { NotFoundText, WrapperNotFound } from './NotFound.styled';
import bgNotFound from '../../image/bgNotFound.jpg';

const NotFound = () => {
  return (
    <main>
      <WrapperNotFound style={{ backgroundImage: `url(${bgNotFound})` }}>
        <NotFoundText>
          Not found this page. Go to
          <Link to="/"> Home</Link>
        </NotFoundText>
      </WrapperNotFound>
    </main>
  );
};

export default NotFound;
