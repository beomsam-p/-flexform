package com.flexform.api.service.workspace;

import com.flexform.api.dto.UserDto;
import com.flexform.api.dto.WorkspaceDto;
import com.flexform.api.entity.Workspace;

import java.util.List;
import java.util.UUID;

public interface WorkspaceService {
    WorkspaceDto getWorkspaceDto(UUID workspaceId , UserDto loginUser);
    Workspace getWorkspace(UUID workspaceId , UserDto loginUser);
    List<WorkspaceDto> getWorkspaceDtoList(UserDto loginUser);
    WorkspaceDto addWorkspace(WorkspaceDto workspaceDto, UserDto loginUser);
    WorkspaceDto updateWorkspace(WorkspaceDto workspaceDto , UserDto loginUser);
    WorkspaceDto deleteWorkspace(UUID workspaceId, UserDto loginUser);
}
