package com.flexform.api.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ResponseContainer {
    private StatusDto status;
    private Object data;

}
