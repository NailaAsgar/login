import React from 'react';
import {Table} from 'reactstrap';



function Emp(detail){    
    return(
        <>
        <div className="col-12 col-md-5 m-1">
                <div>
                            <Table>   
                                <tbody>
                                    <tr>{detail.employee_name}</tr>
                                    <tr>{detail.employee_salary}</tr>
                                    <tr>{detail.employee_age}</tr>
                                </tbody>
                            </Table>  
                </div>
        </div>
        </>
    );
}

const EmpsDetail =(props) => {
    if(props.detail != null)
        return(
                <div className="row">
                        <Emp detail={props.detail}/> 
                    </div>
        );
    
}

export default EmpsDetail;