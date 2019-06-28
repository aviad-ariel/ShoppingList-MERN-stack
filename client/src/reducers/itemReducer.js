import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../action/types';


const initState = {
    items: [],
    loaded: false
};


export default function(state = initState , action){
    console.log(action.type);
    switch(action.type){
        
        case GET_ITEMS:
            return{
                ...state,
                items: action.payload,
                loaded: false
            };
        case DELETE_ITEM:
            return{
            ...state,
            items: state.items.filter(item => item._id !== action.payload)
            }
        case ITEMS_LOADING:
            return{
            ...state,
            loaded: true
            }
        case ADD_ITEM:
            return{
            ...state,
            items: [action.payload, ...state.items]
            }
        default:
            return state;
    }
}