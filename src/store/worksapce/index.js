import {
  UPDATE_WORKSPACE,
  DELETE_WORKSPACE,
  ADD_WORKSPACE,
  CHANGE_CURRENT_WORKSPACE_ITEM,
} from "./WorkspaceActions";

const initalState = {
  currentWorkspaceItem: { workspaceName: "Workspace1", workspaceId: 0 },
  workspaceItems: [
    { workspaceName: "Workspace1", workspaceId: 0 },
    { workspaceName: "Workspace2", workspaceId: 1 },
    { workspaceName: "Workspace3", workspaceId: 2 },
    { workspaceName: "Workspace4", workspaceId: 3 },
    { workspaceName: "Workspace5", workspaceId: 4 },
    { workspaceName: "Workspace6", workspaceId: 5 },
    { workspaceName: "Workspace7", workspaceId: 6 },
  ],
};

const workspace = (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_WORKSPACE_ITEM:
      return { ...state, currentWorkspaceItem: action.workspaceItem };
    case ADD_WORKSPACE:
      return {
        ...state,
        workspaceItems: [action.workspaceItem, ...state.workspaceItems],
      };
    case UPDATE_WORKSPACE:
      const updateWorkspaceItem = action.workspaceItem;
      const updatedWorkspaceItems = state.workspaceItems.map(
        (workspaceItem) => {
          if (workspaceItem.workspaceId === updateWorkspaceItem.workspaceId) {
            workspaceItem.workspaceName = updateWorkspaceItem.workspaceName;
          }
          return workspaceItem;
        }
      );
      return { ...state, workspaceItems: updatedWorkspaceItems };
    case DELETE_WORKSPACE:
      console.log(action);
      const deleteWorkspaceItem = action.workspaceItem;

      const deletedWorkspaceItems = state.workspaceItems.filter(
        (workspaceItem) =>
          workspaceItem.workspaceId !== deleteWorkspaceItem.workspaceId
      );

      return { ...state, workspaceItems: deletedWorkspaceItems };
    default:
      return state;
  }
};

export default workspace;
