package com.flexform.api.service.workspace;

import com.flexform.api.DefaultUserBaseTest;
import com.flexform.api.dto.WorkspaceDto;
import org.assertj.core.api.SoftAssertions;
import org.hibernate.exception.ConstraintViolationException;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThatException;

@SpringBootTest
@ActiveProfiles("test")
class WorkspaceServiceImplTestDefaultUser extends DefaultUserBaseTest {
    @Autowired
    private WorkspaceServiceImpl workspaceService;

    @Test
    @DisplayName("workspace 추가 성공")
    void addWorkspace() {
        //given
        String workspaceName = "test123";
        int workspaceOrder = 0;
        UUID userId = this.loginUser.getUserId();
        WorkspaceDto workspaceDto = WorkspaceDto.builder()
                .workspaceName(workspaceName)
                .workspaceOrder(workspaceOrder)
                .build();

        //when
        WorkspaceDto insertedWorkspaceDto = workspaceService.addWorkspace(workspaceDto, loginUser);

        //then
        SoftAssertions softAssertions = new SoftAssertions();
        softAssertions.assertThat(insertedWorkspaceDto.getWorkspaceName()).isEqualTo(workspaceName);
        softAssertions.assertThat(insertedWorkspaceDto.getWorkspaceOrder()).isEqualTo(workspaceOrder);
        softAssertions.assertThat(insertedWorkspaceDto.getDeletable()).isEqualTo(true);
        softAssertions.assertThat(insertedWorkspaceDto.getCreateDate()).isNotNull();
        softAssertions.assertThat(insertedWorkspaceDto.getUpdateDate()).isNotNull();
        softAssertions.assertThat(insertedWorkspaceDto.getCreateBy()).isEqualTo(userId);
        softAssertions.assertThat(insertedWorkspaceDto.getUpdateBy()).isEqualTo(userId);
        softAssertions.assertAll();
    }

    @Test
    @DisplayName("workspace 추가 실패: 필수 값을 입력하지 않는다(workspaceName, order, deletable ")
    void addWorkspace2() {
        //given
        WorkspaceDto workspaceDto = WorkspaceDto.builder().build();

        //then
        assertThatException()
                .isThrownBy(() -> workspaceService.addWorkspace(workspaceDto, loginUser))
                .withCauseInstanceOf((ConstraintViolationException.class));
    }


    @Test
    @DisplayName("workspace 수정 성공")
    void updateWorkspace(){
        //given insert workspace
        String insertWorkspaceName = "insert";
        int insertWorkspaceOrder = 0;
        WorkspaceDto insertWorkspaceDto = WorkspaceDto.builder()
                .workspaceName(insertWorkspaceName)
                .workspaceOrder(insertWorkspaceOrder)
                .build();
        WorkspaceDto insertedWorkspaceDto = workspaceService.addWorkspace(insertWorkspaceDto, loginUser);

        //given update workspace
        String updateWorkspaceName = "update";
        int updateWorkspaceOrder = 99;
        WorkspaceDto updateWorkspaceDto = WorkspaceDto.builder()
                //insert한 workspace ID를 세팅한다.
                .workspaceId(insertedWorkspaceDto.getWorkspaceId())
                .workspaceName(updateWorkspaceName)
                .workspaceOrder(updateWorkspaceOrder)
                .build();

        //when
        WorkspaceDto updatedWorkspaceDto = workspaceService.updateWorkspace(updateWorkspaceDto, loginUser);

        //then
        SoftAssertions softAssertions = new SoftAssertions();
        softAssertions.assertThat(updatedWorkspaceDto.getWorkspaceName()).isEqualTo(updateWorkspaceName);
        softAssertions.assertThat(updatedWorkspaceDto.getWorkspaceOrder()).isEqualTo(updateWorkspaceOrder);
        softAssertions.assertThat(updatedWorkspaceDto.getUpdateDate()).isAfter(insertedWorkspaceDto.getUpdateDate());
        softAssertions.assertAll();
    }

    /**
     * update 실패 시나리오
     * 1. user 정보 불일치
     * 2. 수정할 값이 null인 경우
     * 3. 수정일이 생성된 날보다 이후여야 한다.
     */


}