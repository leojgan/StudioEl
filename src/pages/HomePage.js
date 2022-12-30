import { Container, Col, Row } from 'reactstrap'
import SubHeader from '../components/SubHeader'
import SPOTLIGHTS from '../features/spotlights/SPOTLIGHTS'
import ellenPortrait from '../img/ellenPortrait.png'
import SpotlightList from '../features/spotlights/SpotlightList'
import background from '../img/background.png'

const spotlights = SPOTLIGHTS;

const HomepageBody = () => {
    console.log(spotlights)
    return (
        <>
            <Row>
                <Col className='col md-4'>
                    <img src={ellenPortrait} className='portrait' alt='Ellen Portrait' />
                </Col>
                <Col className='portrait-text'>
                    <h1 className='rocksalt'>Welcome!</h1>
                    <br/>
                    <p>If this is your first time here, we're happy to have you! If not,welcome abck! We firmly believe that a strong understanding of the arts can provide students with the tools they'll need to tackle any other subject! Creativity, lateral thinking, and problem-solving are just a few of the skills we hope to expand.</p>
                    <br/>
                    <p>We have an ever-growing list of <em>resources</em> we develop 'in house', as well as from our community of passionate artists and educators. <em>Log in</em> to access your saved projects, or create an account to join us in helping to make the arts accessible to everyone!</p>
                    <br/>
                    <p>Learn more about us and our mission <em>here</em>, or <em>drop us a line!</em></p>
                    <h3 className='cursive'>Ellen, Studio El</h3>
                </Col>
                <SpotlightList />
            </Row>
        </>
    )
}

const HomePage = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
            <Container>
                <SubHeader current='Home' />
                <HomepageBody />
            </Container>
        </div>
    );
};

export default HomePage;