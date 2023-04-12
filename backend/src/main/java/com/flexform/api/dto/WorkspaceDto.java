package com.flexform.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class WorkspaceDto {
    private UUID workspaceId;
    private String workspaceName;
    private Integer workspaceOrder;
    private Boolean deletable;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
    private UUID createBy;
    private UUID updateBy;

    @JsonIgnore
    private UserDto user;
}
