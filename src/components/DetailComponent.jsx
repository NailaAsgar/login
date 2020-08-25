import React from 'react';
import {Table} from 'reactstrap';
import { Link } from "react-router-dom";


function RenderDetail(detail){    
    return(
        <div className="col-12 col-md-5 m-1">
                <div>
                    <h4>
                    LIST OF EMPLOYEES
                    </h4>
                            <Table>   
                                <Link to={`/empdetail/${detail.id}`} >
                                <tbody>
                                    <tr>{detail.employee_name}</tr>
                                </tbody>  
                                </Link>
                            </Table>  
                </div>
        </div>
    )
}


const EmpDetail = (props) => {
    const menu = props.details.details.map((detail) => {            //iterate in all the dishes //this is removed because props is comming as parameter
         return(
            <div key={detail.id} className="col-12 col-md-5 m-1">
                <RenderDetail detail={detail}/>
            </div>
            );
        });
            return (
                <>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </>
            );
}

export default EmpDetail; 