package com.flexform.api.controller;

import com.flexform.api.dto.*;
import com.flexform.api.service.workspace.LabelColorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class LabelColorController {
    private final LabelColorService labelColorService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/label-colors")
    public ResponseEntity<ResponseContainer> getSurveys() {
        final List<LabelColorDto> labelColors = labelColorService.getAllLabelColors();
        return ResponseEntity.ok().body(ResponseContainer.builder()
                .status(StatusDto.builder()
                        .code(HttpStatus.OK.value())
                        .message(HttpStatus.OK.name())
                        .build())
                .data(labelColors)
                .build());
    }
}
