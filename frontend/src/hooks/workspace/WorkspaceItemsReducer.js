import { ADD_WORKSPACE_ITEM, UPDATE_WORKSPACE_ITEM, DELETE_WORKSPACE_ITEM } from './WorkspaceItemsActions';

const workspaceItemsReducer = (state, action) => {
  switch (action.type) {
    case ADD_WORKSPACE_ITEM:
      return [...state, action.workspaceItem];

    case UPDATE_WORKSPACE_ITEM:
      const updateWorkspaceItem = action.workspaceItem;
      const updatedWorkspaceItems = state.map(workspaceItem => {
        if (workspaceItem.workspaceId === updateWorkspaceItem.workspaceId) {
          workspaceItem.workspaceName = updateWorkspaceItem.workspaceName;
        }
        return workspaceItem;
      });
      return updatedWorkspaceItems;

    case DELETE_WORKSPACE_ITEM:
      const deleteWorkspaceItem = action.workspaceItem;
      const deletedWorkspaceItems = state.filter(
        workspaceItem => workspaceItem.workspaceId !== deleteWorkspaceItem.workspaceId,
      );
      return deletedWorkspaceItems;

    default:
      return state;
  }
};

export default workspaceItemsReducer;
