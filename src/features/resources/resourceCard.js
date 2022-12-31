import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap'

const ResourceCard = ({ resource }) => {
    const { title, info, image } = resource
    return (
        <Card className='card-effect'>
            <CardBody>
                <CardTitle className='cardTitle' style={{fontFamily:'Rock Salt'}} >
                    {title}
                </CardTitle>
            </CardBody>
            <CardImg width='100%' src={image} atl={title} />
            <CardBody>
                <CardText className='card-text'>
                    {info}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default ResourceCard