package com.flexform.api.entity;

import com.flexform.api.dto.SurveyDto;
import com.flexform.api.entity.common.BaseEntity;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Getter
@Setter
@Entity
@Table(name = "survey")
public class Survey extends BaseEntity{
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name="uuid2", strategy = "uuid2")
    @Column(name = "survey_id", columnDefinition = "BINARY(16)")
    private UUID surveyId;

    @Column(name = "survey_name")
    private String surveyName;

    @Column(name = "badge")
    private String badge;

    @Column(name = "label_color")
    private String labelColor;

    @Column(name = "response_count")
    private Integer responseCount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "workspace_id")
    private Workspace workspace;


    public SurveyDto toDto(){
        return SurveyDto.builder()
                .surveyId(this.surveyId)
                .surveyName(this.surveyName)
                .badge(this.badge)
                .labelColor(this.labelColor)
                .responseCount(this.responseCount)
                .workspace(this.workspace.toDto())
                .createBy(this.createBy)
                .updateBy(this.updateBy)
                .createDate(this.createdDate)
                .updateDate(this.updateDate)
                .build();
    }

    public static Survey of(SurveyDto surveyDto){
        return Survey.builder()
                .surveyId(surveyDto.getSurveyId())
                .surveyName(surveyDto.getSurveyName())
                .badge(surveyDto.getBadge())
                .labelColor(surveyDto.getLabelColor())
                .responseCount(surveyDto.getResponseCount())
                .createBy(surveyDto.getCreateBy())
                .updateBy(surveyDto.getUpdateBy())
                .createdDate(surveyDto.getCreateDate())
                .updateDate(surveyDto.getUpdateDate())
                .build();
    }

}
