package com.flexform.api.service.workspace;


import com.flexform.api.dto.WorkspaceDto;
import java.util.List;

public interface WorkspaceService {
    List<WorkspaceDto> getWorkspaces();
    WorkspaceDto addWorkspace(WorkspaceDto workspaceDto);
}
