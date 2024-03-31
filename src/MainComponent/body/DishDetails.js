import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import LoadComments from './LoadComments';
import CommentForm from './CommentForm';
import { baseURL } from '../../redux/baseURL';

const DishDetails = props => {
  return (
    <div>
      <Card className="text-start">
        <CardImg
          alt={props.selectedDish.name}
          src={baseURL + props.selectedDish.image}
          className='dishDetailImg'
        />
        <CardBody>
          <CardTitle tag="h5">
            {props.selectedDish.name}
          </CardTitle>
          <CardText>
            {props.selectedDish.description}
          </CardText>
          <CardText>
            {props.selectedDish.price}/-
          </CardText>
          <hr />
          <LoadComments
            comments={props.comments}
            commentIsLoading={props.commentIsLoading}
          />
          <hr />
          <CommentForm
            dishId={props.selectedDish.id}
            addComment={props.addComment}
          />
        </CardBody>
      </Card>
    </div>
  )
}

export default DishDetails