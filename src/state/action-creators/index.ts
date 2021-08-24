import axios from "axios";
import { Dispatch } from 'redux';
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepos = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPO,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.com/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
          type: ActionType.SEARCH_REPO_SUCCESS,
          payload: names
      });
    } catch (err) {
        dispatch({
            type: ActionType.SEARCH_REPO_ERROR,
            payload: err.message,
        });
    }
  };
};
