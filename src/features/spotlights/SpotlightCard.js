import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap'

const SpotlightCard = ({ spotlight }) => {
    const { title, info, image } = spotlight
    return (
        <Card className='spotlight-card'>
            <CardBody>
                <CardTitle className='cardTitle' style={{fontFamily:'Rock Salt'}} >
                    {title}
                </CardTitle>
            </CardBody>
            <CardImg width='100%' src={image} alt={title} />
            <CardBody>
                <CardText>
                    {info}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default SpotlightCard