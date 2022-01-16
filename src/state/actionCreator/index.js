export const DepositeMoney =(amount)=>{
    return (dispatch) =>{
        dispatch({
            type :'deposite',
            payload :amount
        })
    }
}
export const WithDrawMoney =(amount)=>{
    return (dispatch) =>{
        dispatch({
            type :'withdraw',
            payload :amount
        })
    }
}