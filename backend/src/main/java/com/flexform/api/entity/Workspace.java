package com.flexform.api.entity;


import com.flexform.api.entity.common.Deleted;
import com.flexform.api.entity.common.QueryBy;
import com.flexform.api.entity.common.Timestamped;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "workspace")
public class WorkspaceEntity {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name="uuid2", strategy = "uuid2")
    @Column(name = "workspace_id", columnDefinition = "BINARY(16)")
    private UUID workspaceId;

    @Column(name = "workspace_name")
    private String workspaceName;

    @Column(name = "workspace_order")
    private int workspaceOrder;

    @Embedded
    private Deleted deleted;

    @Embedded
    private Timestamped timestamped;

    @Embedded
    private QueryBy queryBy;


}

