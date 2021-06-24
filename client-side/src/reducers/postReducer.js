// import _ from 'lodash';



export default (state = [], action) => {

    switch (action.type) {
        case "FETCH_POSTS":
            return {...action.payload};
        case "CREATE_POST":
            return {...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}