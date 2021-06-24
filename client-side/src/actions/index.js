// import jsonPlaceholder from '../apis/jsonPlaceholder';
// import { v4 as uuidv4 } from 'uuid';

// import history from '../history'


// export const fetchUsers = () => async dispatch => {
//     fetch("/getUsers");

//     // const response = await jsonPlaceholder.get('/users');

//     // dispatch({type: "FETCH_USERS", payload: response.data});
// };


// // export const fetchPosts = () => async dispatch => {
// //     const response = await jsonPlaceholder.get('/users');
// //     dispatch({type: "FETCH_POSTS", payload: response.data.posts.reverse()});
// // };

// export const createAccount = formValues => async  (dispatch) => {
//     // const userId = uuidv4();
//     jsonPlaceholder.post('/createUser', { ...formValues } );

//     // dispatch({ type: "CREATE_ACCOUNT", payload: response.data });
//     history.push('/');

// };


// export const editUser = (id, formValues) => async dispatch => {
//     const response = await jsonPlaceholder.patch(`/editUser`, formValues);

//     dispatch({ type: "EDIT_USER", payload: response.data });
//     history.push('/');
// }

// export const createPost = formValues => async (dispatch) => {
//     // const postId = uuidv4();
//     jsonPlaceholder.post('/users', { ...formValues });

//     // dispatch({ type: "CREATE_POST", payload: response.data });
//     history.push('/');

// }


