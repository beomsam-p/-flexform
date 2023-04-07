package com.flexform.api.repository;

import com.flexform.api.dto.UserDto;
import com.flexform.api.entity.User;
import com.flexform.api.entity.common.Deleted;
import com.flexform.api.entity.common.QueryBy;
import com.flexform.api.entity.common.Timestamped;
import com.flexform.api.entity.Workspace;
import com.flexform.api.service.workspace.UserService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static org.assertj.core.api.BDDAssertions.*;

@ActiveProfiles("test")
@SpringBootTest
class WorkspaceRepositoryTest {
    @Autowired
    private WorkspaceRepository workspaceRepository;

    @Autowired
    private UserService userService;


    @Test
    @DisplayName("Sample Workspace 를 저장한다")
    void insertWorkspace() {
        final UUID userId = UUID.randomUUID();
        //given
        final Workspace workspace = Workspace.builder().
                workspaceName("Workspace1").
                workspaceOrder(0).
                timestamped(new Timestamped(LocalDateTime.now(), LocalDateTime.now())).
                deleted(new Deleted(false)).
                queryBy(new QueryBy(userId, userId)).
                build();

        //when
        final Workspace savedWorkspace = workspaceRepository.save(workspace);

        //then
        final Workspace selectedWorkspace = workspaceRepository.findById(savedWorkspace.getWorkspaceId()).orElseThrow(RuntimeException::new);
        assertThat(selectedWorkspace.getWorkspaceId()).isEqualTo(workspace.getWorkspaceId());
        assertThat(selectedWorkspace.getWorkspaceName()).isEqualTo(workspace.getWorkspaceName());
    }

    @Test
    @DisplayName("유저별 워크스페이스를 조회한다.")
    void findWorkspaceByUser() {
        //given
        final UserDto userDto = userService.getLoginUser();
        final UserDto joinedUser = userService.joinUser(userDto);
        final UUID userId = userDto.getUserId();
        final List<Workspace> workspaces = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            final Workspace workspace = Workspace.builder()
                    .workspaceId(UUID.randomUUID())
                    .user(User.toEntity(joinedUser))
                    .workspaceName("workspace" + (i + 1))
                    .workspaceOrder(0)
                    .timestamped(new Timestamped(LocalDateTime.now(), LocalDateTime.now()))
                    .deleted(new Deleted(false))
                    .queryBy(new QueryBy(userId, userId))
                    .build();
            workspaces.add(workspace);
        }
        workspaceRepository.saveAll(workspaces);

        //when
        final List<Workspace> foundWorkspace = workspaceRepository.findWorkspacesByUserId(joinedUser.getUserId());
        assertThat(foundWorkspace.size()).isEqualTo(5);

    }
}