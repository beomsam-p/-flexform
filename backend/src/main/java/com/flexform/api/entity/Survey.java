package com.flexform.api.entity;

import com.flexform.api.entity.common.Deleted;
import com.flexform.api.entity.common.QueryBy;
import com.flexform.api.entity.common.Timestamped;

import javax.persistence.Embedded;
import javax.persistence.Table;
import java.util.UUID;

@Table(name = "survey")
public class SurveyEntity {
    private UUID surveyID;

    private WorkspaceEntity workspaceEntity;

    private String badge;

    private String labelColor;

    @Embedded
    private Deleted deleted;

    @Embedded
    private Timestamped timestamped;

    @Embedded
    private QueryBy queryBy;
}
