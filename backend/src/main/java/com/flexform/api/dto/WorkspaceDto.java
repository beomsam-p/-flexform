package com.flexform.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class WorkspaceDto  {
    private UUID workspaceId;

    @NotBlank(message = "[workspace_name]은 필수 값입니다.")
    private String workspaceName;

    @Min(value = 1, message = "[workspace_order]는 1 이상입니다.")
    @NotNull(message = "[workspace_order]은 필수 값입니다.")
    private Integer workspaceOrder;


    private Boolean deletable;


    private LocalDateTime createDate;
    private LocalDateTime updateDate;
    private UUID createBy;
    private UUID updateBy;

    @JsonIgnore
    private UserDto user;
}
