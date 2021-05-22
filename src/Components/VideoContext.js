import { createContext, useReducer } from "react";

const videoList = {
  likedList: [],
  historyList: [],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, videoList);

  return (
    <AppContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const appReducer = (state, action) => {
  const { likedList, historyList } = state;
  console.log(action);
  switch (action.type) {
    case "ADD_TO_LIKED":
      return {
        ...state,
        likedList: likedList.concat({ id: action.id }),
      };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        historyList: historyList.concat({ id: action.id }),
      };
    default:
      return state;
  }
};

export { AppContext, AppProvider };
