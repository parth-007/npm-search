import { ActionType } from "../action-types";

interface SearchAction {
  type: ActionType.SEARCH_REPO;
}

interface SearchActionSuccess {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

interface SearchActionError {
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string;
}

export type Action = SearchAction | SearchActionSuccess | SearchActionError;
