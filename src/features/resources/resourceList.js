import RESOURCES from "./RESOURCES"
import ResourceCard from "./resourceCard"
import { Row, Col } from 'reactstrap'

const ResourceList = () => {
    return (
        <Row>
            {RESOURCES.map(resource => {
                return (
                    <Col className="col-12 col-sm-6 col-lg-4 my-3">
                        <ResourceCard resource={resource} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default ResourceList