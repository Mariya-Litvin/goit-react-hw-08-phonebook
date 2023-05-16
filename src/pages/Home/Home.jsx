import { Helmet } from 'react-helmet';
import { HomeText, HomeWrapper } from './Home.styled';
import bgHome from '../../image/bgHome.jpg';
import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet>
        <title>Contacts App</title>
      </Helmet>
      <HomeWrapper style={{ backgroundImage: `url(${bgHome})` }}>
        {isLoggedIn ? (
          <h2>
            Go to
            <Link to="/contacts"> Contacts</Link>
          </h2>
        ) : (
          <HomeText>
            Welcome! Glad to see you in the Contacts app! You can register or
            log in to use all the features, namely: create a new contact, add a
            contact to an existing list, or delete a contact. It is also
            possible to search for the contact you need by his name.
          </HomeText>
        )}
      </HomeWrapper>
    </>
  );
};

export default Home;
