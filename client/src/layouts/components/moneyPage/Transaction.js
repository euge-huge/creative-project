import React from "react";
import { useDispatch } from 'react-redux'
import { deleteTransaction } from "../../../actions/moneyActions";

export const Transaction = (props) => {
    const dispatch = useDispatch();
    
    const deleteTrans = () => {
        dispatch(deleteTransaction(props.id));
    }

    return (
        <div>
            <div className="row align-items-center">
                <div className="col-sm-1">
                    {props.type === "outcome" ? (<span className="text-danger font-weight-bold mr-3" style={{fontSize: "22px"}}>–</span>) : (<span className="text-success font-weight-bold mr-3" style={{fontSize: "24px"}}>+</span>)}
                </div>
                <div className="col-sm-7">
                    <span style={{fontSize: "18px"}}>{props.title}</span>
                </div>
                <div className="col-sm-3">
                    <span className={ props.type === "outcome" ? "text-danger" : "text-success"} style={{fontSize: "18px"}}>{props.amount}</span>
                </div>
                <div className="col-sm-1" style={{fontSize: "18px", cursor: "pointer"}} onClick={deleteTrans}> &times; </div>
            </div>
        </div>
    );
}