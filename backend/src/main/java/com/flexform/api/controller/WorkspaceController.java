package com.flexform.api.controller;

import com.flexform.api.dto.ResponseContainer;
import com.flexform.api.dto.StatusDto;
import com.flexform.api.dto.WorkspaceDto;
import com.flexform.api.service.workspace.UserService;
import com.flexform.api.service.workspace.WorkspaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class WorkspaceController {
    private final WorkspaceService workspaceService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/workspaces")
    public ResponseEntity<ResponseContainer> getWorkspaces() {
        final List<WorkspaceDto> workspaces = workspaceService.getWorkspaces();
        return ResponseEntity.ok().body(ResponseContainer.builder()
                .status(StatusDto.builder()
                        .code(HttpStatus.OK.value())
                        .message(HttpStatus.OK.name())
                        .build())
                .data(workspaces)
                .build());
    }
}
