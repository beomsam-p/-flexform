package com.flexform.api.repository;

import com.flexform.api.DefaultUserBaseTest;
import com.flexform.api.dto.UserDto;
import com.flexform.api.entity.User;
import com.flexform.api.entity.Workspace;
import com.flexform.api.service.user.UserService;
import org.junit.jupiter.api.*;
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
class WorkspaceRepositoryTest extends DefaultUserBaseTest {
    @Autowired
    private WorkspaceRepository workspaceRepository;

    @Autowired
    private UserService userService;

    @Test
    @DisplayName("Sample Workspace 를 저장한다")
    void insertWorkspace() {
        //given
        final UUID userId = UUID.randomUUID();
        final LocalDateTime now = LocalDateTime.now();
        final Workspace workspace = Workspace.builder()
                .workspaceName("Workspace1")
                .workspaceOrder(0)
                .deletable(true)
                .createdDate(now)
                .updateDate(now)
                .createBy(userId)
                .updateBy(userId)
                .build();

        //when
        final Workspace savedWorkspace = workspaceRepository.save(workspace);

        //then
        final Workspace selectedWorkspace = workspaceRepository.findById(savedWorkspace.getWorkspaceId()).orElseThrow(RuntimeException::new);
        assertThat(selectedWorkspace.getWorkspaceId()).isEqualTo(workspace.getWorkspaceId());
        assertThat(selectedWorkspace.getWorkspaceName()).isEqualTo(workspace.getWorkspaceName());
    }

    @Test
    @DisplayName("워크스페이스를 조회한다.")
    void findWorkspaceByUser() {
        //given
        final UserDto userDto = this.userService.getLoginUser();
        final UserDto joinedUser = this.userService.joinUser(userDto);
        final UUID userId = UUID.randomUUID();
        final LocalDateTime now = LocalDateTime.now();
        final List<Workspace> workspaces = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            final Workspace workspace = Workspace.builder()
                    .workspaceId(UUID.randomUUID())
                    .user(User.of(joinedUser))
                    .workspaceName("workspace" + (i + 1))
                    .workspaceOrder(0)
                    .deletable(true)
                    .createdDate(now)
                    .updateDate(now)
                    .createBy(userId)
                    .updateBy(userId)
                    .build();
            workspaces.add(workspace);
        }
        workspaceRepository.saveAll(workspaces);

        //when
        final List<Workspace> foundWorkspace = workspaceRepository.findWorkspacesByUserId(joinedUser.getUserId());
        assertThat(foundWorkspace.size()).isEqualTo(5);

    }
}