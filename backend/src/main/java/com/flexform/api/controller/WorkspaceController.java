package com.flexform.api.controller;

import com.flexform.api.dto.ResponseContainer;
import com.flexform.api.dto.StatusDto;
import com.flexform.api.dto.UserDto;
import com.flexform.api.dto.WorkspaceDto;
import com.flexform.api.entity.Workspace;
import com.flexform.api.service.user.UserService;
import com.flexform.api.service.workspace.WorkspaceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class WorkspaceController {
    private final WorkspaceService workspaceService;
    private final UserService userService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/workspaces")
    public ResponseEntity<ResponseContainer> getWorkspaces() {
        UserDto loginUser = userService.getLoginUser();
        final List<WorkspaceDto> workspaces = workspaceService.getWorkspaces(loginUser);
        return ResponseEntity.ok().body(ResponseContainer.builder()
                .status(StatusDto.builder()
                        .code(HttpStatus.OK.value())
                        .message(HttpStatus.OK.name())
                        .build())
                .data(workspaces)
                .build());
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/workspaces/{workspaceId}")
    public ResponseEntity<ResponseContainer> getWorkspace(@PathVariable(name = "workspaceId") UUID workspaceId) {
        UserDto loginUser = userService.getLoginUser();
        WorkspaceDto deletedWorkspace = workspaceService.getWorkspace(workspaceId, loginUser);
        return ResponseEntity.ok().body(ResponseContainer.builder()
                .status(StatusDto.builder()
                        .code(HttpStatus.OK.value())
                        .message(HttpStatus.OK.name())
                        .build())
                .data(deletedWorkspace)
                .build());
    }


    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/workspaces")
    public ResponseEntity<ResponseContainer> addWorkspace(@RequestBody @Valid WorkspaceDto workspaceDto) {
        UserDto loginUser = userService.getLoginUser();
        WorkspaceDto insertedWorkspace = workspaceService.addWorkspace(workspaceDto, loginUser);
        return ResponseEntity.ok().body(ResponseContainer.builder()
                .status(StatusDto.builder()
                        .code(HttpStatus.CREATED.value())
                        .message(HttpStatus.CREATED.name())
                        .build())
                .data(insertedWorkspace)
                .build());
    }

    @ResponseStatus(HttpStatus.OK)
    @PatchMapping("/workspaces/{workspaceId}")
    public ResponseEntity<ResponseContainer> updateWorkspace(@PathVariable(name = "workspaceId") UUID workspaceId, @RequestBody @Valid WorkspaceDto workspaceDto) {
        UserDto loginUser = userService.getLoginUser();
        workspaceDto.setWorkspaceId(workspaceId);
        WorkspaceDto updatedWorkspace = workspaceService.updateWorkspace(workspaceDto, loginUser);
        return ResponseEntity.ok().body(ResponseContainer.builder()
                .status(StatusDto.builder()
                        .code(HttpStatus.OK.value())
                        .message(HttpStatus.OK.name())
                        .build())
                .data(updatedWorkspace)
                .build());
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/workspaces/{workspaceId}")
    public ResponseEntity<Void> deleteWorkspace(@PathVariable(name = "workspaceId") UUID workspaceId) {
        UserDto loginUser = userService.getLoginUser();
        workspaceService.deleteWorkspace(workspaceId, loginUser);
        return ResponseEntity.noContent().build();
    }


}
