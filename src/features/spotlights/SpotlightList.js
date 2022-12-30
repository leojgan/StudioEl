import SPOTLIGHTS from "./SPOTLIGHTS"
import SpotlightCard from "./SpotlightCard"
import { Row, Col } from 'reactstrap'

const SpotlightList = () => {
    return (
        <Row>
            {SPOTLIGHTS.map(spotlight => {
                return (
                    <Col>
                        <SpotlightCard spotlight={spotlight} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default SpotlightList