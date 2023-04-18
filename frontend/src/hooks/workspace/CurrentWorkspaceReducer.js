import { CHANGE_CURRENT_WORKSPACE } from './CurrentWorkspaceActions';

const currentWorkspaceReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_WORKSPACE:
      return action.workspaceItem;
    default:
      return state;
  }
};

export default currentWorkspaceReducer;
