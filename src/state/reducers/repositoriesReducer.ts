import {SEARCH_REPO, SEARCH_REPO_ERROR, SEARCH_REPO_SUCCESS} from "../actionTypes";

interface ReposState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// interface Action {
//     type: string;
//     payload?: any;
// }

interface SearchAction {
  type: "search_repos";
}

interface SearchActionSuccess {
  type: "search_repos_success";
  payload: string[];
}

interface SearchActionError {
  type: "search_repos_error";
  payload: string;
}

const reducer = (
  state: ReposState,
  action: SearchAction | SearchActionSuccess | SearchActionError
): ReposState => {
  switch (action.type) {
    case SEARCH_REPO:
      return { loading: true, error: null, data: [] };
    case SEARCH_REPO_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case SEARCH_REPO_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
