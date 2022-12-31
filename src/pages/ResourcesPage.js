import { Container, Col, Row } from 'reactstrap'
import SubHeader from '../components/SubHeader'
import background from '../img/background.png'
import ResourceList from '../features/resources/resourceList'

const ResourcesPage = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
            <Container>
                <SubHeader current='Resources' />
                <ResourceList />
            </Container>
        </div>
    );
};

export default ResourcesPage;