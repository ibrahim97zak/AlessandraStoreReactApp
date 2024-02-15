let cart = []
let handleCart = (state = cart,action) =>{
    let item = action.payload;

    switch (action.type) {
        case "ADDITEM":
            console.log('hi')
            let avilableProd = state.find((x)=> x.id === item.id)
           
            if(avilableProd){
                return state.map((x)=>
                x.id === item.id? {...x,qty:x.qty+1} :x 
                );
            }else{
                return[
                    ...state,
                    {
                        ...item,
                        qty:1,
                    }
                ]
            }
            break;
            case "DELETEITEM":
            console.log('hi')
                let avilableProd2 =state.find((x)=> x.id === item.id);
                if(avilableProd2.qty===1){
                    return state.filter((x)=> x.id !== item.id);
                    
                }else{
                    return state.map((x)=>
                    x.id=== item.id ? {...x,qty:x.qty-1}:x,
                    
                    
                    );
                }
                break;
            default:
                return state;
                break;
    }
};
export default handleCart;