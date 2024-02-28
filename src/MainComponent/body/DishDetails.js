import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import LoadComments from './LoadComments';
const DishDetails = ({ selectedDish }) => {

  return (
    <div>
      <Card className="my-2 text-start">
        <CardImg
          alt={selectedDish.name}
          src={selectedDish.image}
          style={{
            height: 180
          }}
          top
          width="100%"
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
          <LoadComments comments={selectedDish.comments} />
        </CardBody>
      </Card>
    </div>
  )
}

export default DishDetails