import {
  ADD_WORKSPACE_ITEM,
  UPDATE_WORKSPACE_ITEM,
  DELETE_WORKSPACE_ITEM,
} from "./WorkspaceItemsActions";

export const workspaceItemsInit = [
  { workspaceName: "Workspace1", workspaceId: 0, order: 0, deletable: true },
  { workspaceName: "Workspace2", workspaceId: 1, order: 1, deletable: false },
  { workspaceName: "Workspace3", workspaceId: 2, order: 2, deletable: true },
  { workspaceName: "Workspace4", workspaceId: 3, order: 3, deletable: true },
  { workspaceName: "Workspace5", workspaceId: 4, order: 4, deletable: true },
  { workspaceName: "Workspace6", workspaceId: 5, order: 5, deletable: true },
  { workspaceName: "Workspace7", workspaceId: 6, order: 6, deletable: true },
];

const workspaceItemsReducer = (state, action) => {
  switch (action.type) {
    case ADD_WORKSPACE_ITEM:
      return [...state, action.workspaceItem];

    case UPDATE_WORKSPACE_ITEM:
      const updateWorkspaceItem = action.workspaceItem;
      const updatedWorkspaceItems = state.map((workspaceItem) => {
        if (workspaceItem.workspaceId === updateWorkspaceItem.workspaceId) {
          workspaceItem.workspaceName = updateWorkspaceItem.workspaceName;
        }
        return workspaceItem;
      });
      return updatedWorkspaceItems;

    case DELETE_WORKSPACE_ITEM:
      const deleteWorkspaceItem = action.workspaceItem;
      const deletedWorkspaceItems = state.filter(
        (workspaceItem) =>
          workspaceItem.workspaceId !== deleteWorkspaceItem.workspaceId
      );
      return deletedWorkspaceItems;

    default:
      return state;
  }
};

export default workspaceItemsReducer;
