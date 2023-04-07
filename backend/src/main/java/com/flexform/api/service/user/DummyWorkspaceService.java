package com.flexform.api.service.user;

import com.flexform.api.dto.UserDto;
import com.flexform.api.dto.WorkspaceDto;
import com.flexform.api.entity.Workspace;
import com.flexform.api.repository.WorkspaceRepository;
import com.flexform.api.service.workspace.UserService;
import com.flexform.api.service.workspace.WorkspaceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class DummyWorkspaceService implements WorkspaceService {
    private final UserService userService;
    private final WorkspaceRepository workspaceRepository;

    @Override
    public List<WorkspaceDto> getWorkspaces() {
        final UserDto loginUser = userService.getLoginUser();
        log.info("use: {}", loginUser);
        final UserDto user = userService.findUser(loginUser);
        final List<Workspace> workspaces = workspaceRepository.findWorkspacesByUserId(user.getUserId());
        return workspaces.stream().map(Workspace::toDto).collect(Collectors.toList());
    }

    @Override
    public WorkspaceDto addWorkspace(WorkspaceDto workspace) {
        return workspaceRepository.save(Workspace.toEntity(workspace)).toDto();
    }
}
