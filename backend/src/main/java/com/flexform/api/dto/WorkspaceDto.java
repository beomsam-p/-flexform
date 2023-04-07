package com.flexform.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.flexform.api.entity.User;
import com.flexform.api.entity.common.Deleted;
import com.flexform.api.entity.common.QueryBy;
import com.flexform.api.entity.common.Timestamped;
import lombok.Builder;
import lombok.Getter;
import org.springframework.context.annotation.Primary;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Builder
public class WorkspaceDto {
    private UUID workspaceId;
    private String workspaceName;
    private int workspaceOrder;
    private boolean isDelete;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
    private UUID createBy;
    private UUID updateBy;

    @JsonIgnore
    private UserDto user;
}
