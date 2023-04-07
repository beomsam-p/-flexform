package com.flexform.api.entity;


import com.flexform.api.dto.WorkspaceDto;
import com.flexform.api.entity.common.Deleted;
import com.flexform.api.entity.common.QueryBy;
import com.flexform.api.entity.common.Timestamped;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "workspace")
public class Workspace {

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "workspace")
    private List<Survey> surveyList;


    public WorkspaceDto toDto(){
        return WorkspaceDto.builder()
                .workspaceId(this.workspaceId)
                .workspaceName(this.workspaceName)
                .workspaceOrder(this.workspaceOrder)
                .user(user.toDto())
                .isDelete(deleted.isDelete())
                .createDate(timestamped.getCreatedDate())
                .updateDate(timestamped.getUpdateDate())
                .createBy(queryBy.getCreateBy())
                .updateBy(queryBy.getUpdateBy())
                .build();
    }
    public static Workspace toEntity(WorkspaceDto workspaceDto){
        return Workspace.builder()
                .workspaceName(workspaceDto.getWorkspaceName())
                .workspaceOrder(workspaceDto.getWorkspaceOrder())
                .user(User.toEntity(workspaceDto.getUser()))
                .deleted(new Deleted(workspaceDto.isDelete()))
                .timestamped(new Timestamped(workspaceDto.getCreateDate(), workspaceDto.getUpdateDate()))
                .queryBy(new QueryBy(workspaceDto.getCreateBy(), workspaceDto.getUpdateBy()))
                .build();
    }

}

