export const CHANGE_CURRENT_WORKSPACE = "CHANGE_CURRENT_WORKSPACE";

export const changeCurrentWorkspace = (workspaceItem) => ({
  type: CHANGE_CURRENT_WORKSPACE,
  workspaceItem,
});
