package com.flexform.api.entity;

import com.flexform.api.dto.SurveyDto;
import com.flexform.api.entity.common.BaseEntity;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Builder
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


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "workspace_id")
    private Workspace workspace;


    public SurveyDto toDto(){
        return SurveyDto.builder()
                .surveyId(this.surveyId)
                .badge(this.badge)
                .labelColor(this.labelColor)
                .workspace(this.workspace.toDto())
                .build();
    }

    @Override
    protected Survey clone() throws CloneNotSupportedException {
        super.clone();
        return Survey.builder()

                .build();
    }

    public static Survey of(SurveyDto surveyDto){
        return Survey.builder()
                .surveyId(surveyDto.getSurveyId())
                .badge(surveyDto.getBadge())
                .labelColor(surveyDto.getLabelColor())
                .workspace(Workspace.of(surveyDto.getWorkspace()))
                .build();
    }

}
