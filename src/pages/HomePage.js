import { Container } from 'reactstrap'
import SubHeader from '../components/SubHeader'

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <h2>This is the Home page.</h2>
        </Container>
    );
};

export default HomePage;