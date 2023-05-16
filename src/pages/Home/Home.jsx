import { Helmet } from 'react-helmet';
import { HomeText, HomeTextGo, HomeWrapper } from './Home.styled';
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
          <HomeTextGo>
            Go to
            <Link to="/contacts"> Contacts</Link>
          </HomeTextGo>
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
