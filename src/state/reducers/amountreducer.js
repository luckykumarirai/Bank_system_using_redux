
const reducer =(amount=0,action) =>{
    if(action.type === 'deposite')
    {
        return amount + action.payload
    }
    else if(action.type === 'withdraw')
    {
        return amount  - action.payload
    }
    else{
        return amount;
    }
}
export default reducer;
// export const reducer2 =(amount=0,action) =>{
//     if(action.type === 'withdraw')
//     {
//         return amount  - action.payload
//     }
//     else{
//         return amount;
//     }
// }