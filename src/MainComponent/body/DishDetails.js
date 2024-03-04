import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import LoadComments from './LoadComments';
const DishDetails = ({ selectedDish, comments }) => {

  return (
    <div>
      <Card className="text-start">
        <CardImg
          alt={selectedDish.name}
          src={selectedDish.image}
          className='dishDetailImg'
        />
        <CardBody>
          <CardTitle tag="h5">
            {selectedDish.name}
          </CardTitle>
          <CardText>
            {selectedDish.description}
          </CardText>
          <CardText>
            {selectedDish.price}/=
          </CardText>
          <hr />
          <LoadComments comments={comments} />
        </CardBody>
      </Card>
    </div>
  )
}

export default DishDetails