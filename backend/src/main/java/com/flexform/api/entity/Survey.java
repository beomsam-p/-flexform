package com.flexform.api.entity;

import com.flexform.api.entity.common.Deleted;
import com.flexform.api.entity.common.QueryBy;
import com.flexform.api.entity.common.Timestamped;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "survey")
public class Survey {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name="uuid2", strategy = "uuid2")
    @Column(name = "survey_id", columnDefinition = "BINARY(16)")
    private UUID surveyId;

    private String badge;

    private String labelColor;

    @Embedded
    private Deleted deleted;

    @Embedded
    private Timestamped timestamped;

    @Embedded
    private QueryBy queryBy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "workspace_id")
    private Workspace workspace;
}
