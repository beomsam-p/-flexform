export const ADD_WORKSPACE_ITEM = "ADD_WORKSPACE_ITEM";
export const DELETE_WORKSPACE_ITEM = "DELETE_WORKSPACE_ITEM";
export const UPDATE_WORKSPACE_ITEM = "UPDATE_WORKSPACE_ITEM";

export const addWorkspaceItem = (workspaceItem) => ({
  type: ADD_WORKSPACE_ITEM,
  workspaceItem,
});

export const deleteWorkspaceItem = (workspaceItem) => ({
  type: DELETE_WORKSPACE_ITEM,
  workspaceItem,
});

export const updateWorkspaceItem = (workspaceItem) => ({
  type: UPDATE_WORKSPACE_ITEM,
  workspaceItem,
});
