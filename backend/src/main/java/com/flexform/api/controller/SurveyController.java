package com.flexform.api.controller;

import com.flexform.api.dto.ResponseContainer;
import com.flexform.api.dto.StatusDto;
import com.flexform.api.dto.UserDto;
import com.flexform.api.service.survey.SurveyService;
import com.flexform.api.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class SurveyController {
    private final UserService userService;
    private final SurveyService surveyService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/workspaces/{workspaceId}/surveys")
    public ResponseEntity<ResponseContainer> getSurveys(@PathVariable("workspaceId") UUID workspaceId) {
        UserDto loginUser = userService.getLoginUser();
        surveyService.findSurveys(workspaceId, loginUser);
        return ResponseEntity.ok().body(ResponseContainer.builder()
                .status(StatusDto.builder()
                        .code(HttpStatus.OK.value())
                        .message(HttpStatus.OK.name())
                        .build())
                .build());
    }
}
