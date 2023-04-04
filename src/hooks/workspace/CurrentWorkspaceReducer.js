import { CHANGE_CURRENT_WORKSPACE } from "./CurrentWorkspaceActions";

export const currentWorkspaceInit = {
  workspaceName: "Workspace1",
  workspaceId: 0,
  order: 0,
  deletable: true,
};

const currentWorkspaceReducer = (state = currentWorkspaceInit, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_WORKSPACE:
      return action.workspaceItem;
    default:
      return state;
  }
};

export default currentWorkspaceReducer;
