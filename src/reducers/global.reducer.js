export const INITIAL_STATE = {
    menuOpen: false,
    contrastButton : 'dark'
};

// update state return new version of state
export const GlobalReducer = (state, action) => {
    // state (current state) /  action ()

    switch (action.type) {
        case "MENU_OPEN":
          return {
            ...state,
            menuOpen: action.payload
          };
          case "CONTRAST":
            return {
              ...state,
              contrastButton: action.payload
            };
        default:
          return state;
      }

}