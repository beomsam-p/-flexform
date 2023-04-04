export const CHANGE_CURRENT_WORKSPACE_ITEM = "CHANGE_CURRENT_WORKSPACE_ITEM";
export const ADD_WORKSPACE = "ADD_WORKSPACE";
export const DELETE_WORKSPACE = "DELETE_WORKSPACE";
export const UPDATE_WORKSPACE = "UPDATE_WORKSPACE";

export const changeCurrentWorkspaceItem = (workspaceItem) => ({
  type: CHANGE_CURRENT_WORKSPACE_ITEM,
  workspaceItem,
});

export const addWorkspace = (workspaceItem) => ({
  type: ADD_WORKSPACE,
  workspaceItem,
});

export const deleteWorkspace = (workspaceItem) => ({
  type: DELETE_WORKSPACE,
  workspaceItem,
});

export const updateWorkspace = (workspaceItem) => ({
  type: UPDATE_WORKSPACE,
  workspaceItem,
});
