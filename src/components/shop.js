
import React from "react";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {action_creator} from '../state/index';

function Shop() {
  const dispatch = useDispatch();
  return (
    <>
    <h1>Deposite withdraw money</h1>
    <button className="btn btn-primary mx-2 " onClick={()=>{dispatch(action_creator.DepositeMoney(100))}}>+</button>
    Add this item to cart 
    <button className="btn btn-primary mx-2" onClick={()=>{dispatch(action_creator.WithDrawMoney(100))}}>-</button>
     
    </>
  );
}

export default Shop;
