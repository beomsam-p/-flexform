package com.flexform.api.service.workspace;

import com.flexform.api.dto.UserDto;
import com.flexform.api.dto.WorkspaceDto;
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
    public List<WorkspaceDto> getWorkspaces() {
        final UserDto loginUser = userService.getLoginUser();
        final UserDto user = userService.findUser(loginUser);
        final List<Workspace> workspaces = workspaceRepository.findWorkspacesByUserId(user.getUserId());
        return workspaces.stream()
                .map(Workspace::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public WorkspaceDto addWorkspace(WorkspaceDto workspaceDto, UserDto loginUser) {
        workspaceDto.setUser(loginUser);
        workspaceDto.setCreateBy(loginUser.getUserId());
        workspaceDto.setUpdateBy(loginUser.getUserId());
        Workspace workspace = Workspace.of(workspaceDto);
        return workspaceRepository
                .save(workspace)
                .toDto();
    }

    @Override
    @Transactional
    public WorkspaceDto updateWorkspace(WorkspaceDto workspaceDto, UserDto loginUser) {
        Workspace workspace = findWorkspace(workspaceDto.getWorkspaceId());
        validUser(loginUser, workspace);

        workspaceDto.setUser(loginUser);
        workspaceDto.setUpdateBy(loginUser.getUserId());


        workspace.setWorkspaceName(workspaceDto.getWorkspaceName());
        workspace.setWorkspaceOrder(workspaceDto.getWorkspaceOrder());
        workspace.setUpdateDate(LocalDateTime.now());

        return workspace.toDto();
    }

    @Override
    public WorkspaceDto deleteWorkspace(UUID workspaceID, UserDto loginUser) {
        Workspace workspace = findWorkspace(workspaceID);
        workspaceRepository.delete(workspace);
        return workspace.toDto();
    }

    private Workspace findWorkspace(UUID workspaceId){
        return workspaceRepository.findWorkspaceById(workspaceId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 아이디:" + workspaceId));
    }

    private void validUser(UserDto loginUser, Workspace workspace){
        if(loginUser.getUserId().equals(workspace.getUser().getUserId())){
           return;
        }
        throw new IllegalArgumentException("해당 Workspace 에 대한 변경 권한이 없음.");
    }
}
