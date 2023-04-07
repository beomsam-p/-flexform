package com.flexform.api.service;

import com.flexform.api.dto.UserDto;
import com.flexform.api.dto.WorkspaceDto;
import com.flexform.api.entity.Workspace;
import com.flexform.api.repository.WorkspaceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class DummyWorkspaceService implements WorkspaceService{
    private final UserService userService;
    private final WorkspaceRepository workspaceRepository;

    @Override
    public List<WorkspaceDto> getWorkspaces() {
        final UserDto userDto = userService.getLoginUser();
        log.info("use: {}", userDto);
        final List<Workspace> workspaces = workspaceRepository.findWorkspacesByUserId(userDto.getUserId());
        return workspaces.stream().map(Workspace::toDto).collect(Collectors.toList());
    }

    @Override
    public WorkspaceDto addWorkspace(WorkspaceDto workspace) {
        return workspaceRepository.save(Workspace.toEntity(workspace)).toDto();
    }
}
