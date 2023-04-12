package com.flexform.api.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class StatusDto {
    private int code;
    private String message;
}
