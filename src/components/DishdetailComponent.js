import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'
    

    function RenderComments({comments}){
        return(    
            <div >
              <Card>
                  <CardBody>
                    <CardTitle style={{fontWeight: "600"}}>Comment</CardTitle>
                    <CardText>
                        {comments.map(el => 
                            <div key={el.id}>
                            <p>{el.comment}</p>
                            <p>--{el.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(el.date)))}</p>
                            </div>
                        )}
                    </CardText>
                  </CardBody>
              </Card>
            </div>
          );
    }     
    function RenderDish({dish}) {
        return(
                <div>
                    <Card>
                         <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle style={{fontWeight: "600"}}>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                        </Card>
                </div>
            )}

    const DishDetail = (props) => {
        if(props.dish != null){
            return(
                <div className='container'>
                    <div className='row'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
            )}
        return(<div></div>)
    }


export default DishDetail

