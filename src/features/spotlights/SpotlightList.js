import SPOTLIGHTS from "./SPOTLIGHTS"
import SpotlightCard from "./SpotlightCard"
import { Row, Col } from 'reactstrap'

const SpotlightList = () => {
    return (
        <Row>
            {SPOTLIGHTS.map(spotlight => {
                return (
                    <Col className="col-12 col-sm-6 col-lg-3 my-3">
                        <SpotlightCard spotlight={spotlight} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default SpotlightList