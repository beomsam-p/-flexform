package com.flexform.api.entity;


import com.flexform.api.dto.WorkspaceDto;
import com.flexform.api.entity.common.BaseEntity;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "workspace")
public class Workspace extends BaseEntity {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name="uuid2", strategy = "uuid2")
    @Column(name = "workspace_id", columnDefinition = "BINARY(16)")
    private UUID workspaceId;

    @Column(name = "workspace_name", nullable = false)
    private String workspaceName;

    @Column(name = "workspace_order", nullable = false)
    private Integer workspaceOrder;


    @Column(name = "deletable", columnDefinition = "BIT DEFAULT TRUE" , nullable = false)
    private Boolean deletable;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "workspace")
    private List<Survey> surveyList;


    @Override
    public void onPrePersist() {
        super.onPrePersist();
        if (this.deletable == null) {
            this.deletable = true;
        }
    }

    public WorkspaceDto toDto(){
        return WorkspaceDto.builder()
                .workspaceId(this.workspaceId)
                .workspaceName(this.workspaceName)
                .workspaceOrder(this.workspaceOrder)
                .deletable(this.deletable)
                .createDate(super.createdDate)
                .updateDate(super.updateDate)
                .createBy(super.createBy)
                .updateBy(super.updateBy)
                .build();
    }
    public static Workspace of(WorkspaceDto workspaceDto){
        return Workspace.builder()
                .workspaceName(workspaceDto.getWorkspaceName())
                .workspaceOrder(workspaceDto.getWorkspaceOrder())
                .deletable(workspaceDto.getDeletable())
                .createdDate(workspaceDto.getCreateDate())
                .updateDate(workspaceDto.getUpdateDate())
                .createBy(workspaceDto.getCreateBy())
                .updateBy(workspaceDto.getUpdateBy())
                .user(User.of(workspaceDto.getUser()))
                .build();
    }
}

