package com.flexform.api.service.workspace;

import com.flexform.api.dto.UserDto;
import com.flexform.api.dto.WorkspaceDto;

import java.util.List;
import java.util.UUID;

public interface WorkspaceService {
    List<WorkspaceDto> getWorkspaces();
    WorkspaceDto addWorkspace(WorkspaceDto workspaceDto, UserDto loginUser);
    WorkspaceDto updateWorkspace(WorkspaceDto workspaceDto , UserDto loginUser);
    WorkspaceDto deleteWorkspace(UUID workspaceID , UserDto loginUser);
}
