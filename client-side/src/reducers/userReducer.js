// import _ from 'lodash';



export default (state = [], action) => {

    switch (action.type) {
        case "FETCH_USERS":
            return action.payload;
        case "FETCH_USER":
            return action.payload;
        case "EDIT_USER":
            return action.payload;
        default:
            return state;
    }
}