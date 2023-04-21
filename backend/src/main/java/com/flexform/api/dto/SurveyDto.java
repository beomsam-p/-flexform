package com.flexform.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.flexform.api.entity.Workspace;
import lombok.*;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SurveyDto {
    private UUID surveyId;

    @NotBlank(message = "[badge]은 필수 값입니다.")
    private String badge;

    @NotBlank(message = "[label_color]은 필수 값입니다.")
    private String labelColor;

    @NotBlank(message = "[survey_name]은 필수 값입니다.")
    private String surveyName;

    private Integer responseCount;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
    private UUID createBy;
    private UUID updateBy;

    //@JsonIgnore
    private WorkspaceDto workspace;
}
