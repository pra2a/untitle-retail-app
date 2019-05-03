import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items : [
        {id: uuid(), name: 'Eggs', amount: 36738.00, date: '02/12/2018'},
        {id: uuid(), name: 'Milk', amount: 36738.00, date: '02/12/2018'},
        {id: uuid(), name: 'Steak', amount: 36738.00, date: '02/12/2018'},
        {id: uuid(), name: 'Water', amount: 36738.00, date: '02/12/2018'}
    ]
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            }
        default:
            return state;
    }    
}