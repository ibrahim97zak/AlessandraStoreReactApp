// add to cart
export const addToCart =(item)=>{
    return{
        type: "ADDITEM",
        payload: item
    }
}
// delete to cart
export const delToCart =(item) => {
    return{
        type: "DELETEITEM",
        payload: item
    }
}  