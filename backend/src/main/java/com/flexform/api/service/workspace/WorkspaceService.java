package com.flexform.api.service;


import com.flexform.api.dto.WorkspaceDto;
import java.util.List;

public interface WorkspaceService {
    List<WorkspaceDto> getWorkspaces();
    WorkspaceDto addWorkspace(WorkspaceDto workspaceDto);
}
