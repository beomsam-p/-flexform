package com.flexform.api.service.workspace;

import com.flexform.api.dto.UserDto;
import com.flexform.api.dto.WorkspaceDto;
import com.flexform.api.entity.User;
import com.flexform.api.entity.Workspace;
import com.flexform.api.repository.WorkspaceRepository;
import com.flexform.api.service.user.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class WorkspaceServiceImpl implements WorkspaceService {
    private final UserService userService;
    private final WorkspaceRepository workspaceRepository;

    @Override
    public WorkspaceDto getWorkspaceDto(UUID workspaceId, UserDto loginUser) {
        final UserDto user = userService.findUser(loginUser);
        return this.getWorkspace(workspaceId, loginUser).toDto();
    }

    @Override
    public Workspace getWorkspace(UUID workspaceId, UserDto user) {
        return  workspaceRepository.findWorkspaceById(workspaceId, user.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 아이디:" + workspaceId));
    }


    @Override
    public List<WorkspaceDto> getWorkspaceDtoList(UserDto loginUser) {
        final UserDto user = userService.findUser(loginUser);
        final List<Workspace> workspaces = workspaceRepository.findWorkspacesByUserId(user.getUserId());
        return workspaces.stream()
                .map(Workspace::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public WorkspaceDto addWorkspace(WorkspaceDto workspaceDto, UserDto loginUser) {
        final UserDto user = userService.findUser(loginUser);
        workspaceDto.setUser(user);
        workspaceDto.setCreateBy(user.getUserId());
        workspaceDto.setUpdateBy(user.getUserId());
        Workspace workspace = Workspace.of(workspaceDto);
        return workspaceRepository
                .save(workspace)
                .toDto();
    }

    @Override
    @Transactional
    public WorkspaceDto updateWorkspace(WorkspaceDto workspaceDto, UserDto loginUser) {
        final UserDto user = userService.findUser(loginUser);
        Workspace workspace = findWorkspace(workspaceDto.getWorkspaceId(), user.getUserId());
        workspace.setWorkspaceName(workspaceDto.getWorkspaceName());
        workspace.setWorkspaceOrder(workspaceDto.getWorkspaceOrder());
        workspace.setUpdateDate(LocalDateTime.now());
        return workspace.toDto();
    }

    @Override
    public WorkspaceDto deleteWorkspace(UUID workspaceId, UserDto loginUser) {
        final UserDto user = userService.findUser(loginUser);
        Workspace workspace = findWorkspace(workspaceId, user.getUserId());
        workspaceRepository.delete(workspace);
        return workspace.toDto();
    }

    private Workspace findWorkspace(UUID workspaceId, UUID userId) {
        return workspaceRepository.findWorkspaceById(workspaceId, userId)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않는 아이디:" + workspaceId));
    }
}