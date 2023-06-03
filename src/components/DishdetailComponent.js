import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderComments(comments){
        if (comments == null){
            return(<div></div>)
        }
        const showcmts = comments.map((cmnt) => {
            return(
                <li key={cmnt.id}>
                    <p> {cmnt.comment} </p>
                    <p>--{cmnt.author} ,&nbsp;
                    {new Intl.DateTimeFormat('en-us',{
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                    }).format(new Date(cmnt.date))}
                    </p>
                </li>
            );
        });

        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comment</h4>
                <ul className="list-unstyled">
                    {showcmts}
                </ul>
            </div>
        )
    }
    

    renderDish(dish){
        if(dish == null){
            return (<div></div>);
        }
        return(
            <div className="col-12 col-md-3 md-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}  />
                    <CardBody>
                        <CardBody>
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                        </CardBody>
                    </CardBody>
                </Card>
            </div>
        );
    }

    render(){
        const dish = this.props.dish;
        if(dish==null){
            return(<div></div>)

        }
        const dishItem = this.renderDish(dish);
        const dishComments = this.renderComments(dish.comments);
        return(
            <div className="container">

            <div className="row">
                {dishItem}
                {dishComments}
            </div>
            </div>
        );
    }
}
export default DishDetail;