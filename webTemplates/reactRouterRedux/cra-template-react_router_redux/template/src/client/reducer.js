const initialState = {
    username: '',
    selectedPage: ''
  };

  export default function reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
      case "UPDATE_USERNAME": {
        const newState = JSON.parse(JSON.stringify(state))
        newState.username = action.username
        return newState
      }
      case "SELECTED_PAGE": {
        const newState = JSON.parse(JSON.stringify(state))
        newState.selectedPage = action.selectedPage
        return newState
      }
        
      default:
      return state;
    }
}