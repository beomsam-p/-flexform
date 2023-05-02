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


    @Test
    @DisplayName("Sample Workspace 를 저장한다")
    void insertWorkspace() {
        //given
        final UUID userId = super.loginUser.getUserId();
        final LocalDateTime now = LocalDateTime.now();
        final Workspace workspace = Workspace.builder()
                .workspaceName("Workspace1")
                .workspaceOrder(0)
                .deletable(true)
                .createdDate(now)
                .updateDate(now)
                .createBy(userId)
                .updateBy(userId)
                .user(User.of(super.loginUser))
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
        final UUID userId = super.loginUser.getUserId();
        final LocalDateTime now = LocalDateTime.now();
        for (int i = 0; i < 5; i++) {
            final Workspace workspace = Workspace.builder()
                    .user(User.of(super.loginUser))
                    .workspaceName("workspace" + (i + 1))
                    .workspaceOrder(i)
                    .deletable(true)
                    .createdDate(now)
                    .updateDate(now)
                    .createBy(userId)
                    .updateBy(userId)
                    .build();
            workspaceRepository.save(workspace);
        }

        //when
        final List<Workspace> foundWorkspace = workspaceRepository.findWorkspacesByUserId(super.loginUser.getUserId());
        assertThat(foundWorkspace.size()).isEqualTo(5);

    }


    @AfterEach
    void removeAll(){
        workspaceRepository.deleteAll();
    }
}