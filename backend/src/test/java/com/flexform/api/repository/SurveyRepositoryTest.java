package com.flexform.api.repository;

import com.flexform.api.DefaultUserBaseTest;
import com.flexform.api.dto.UserDto;
import com.flexform.api.entity.Survey;
import com.flexform.api.entity.User;
import com.flexform.api.entity.Workspace;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
@ActiveProfiles("test")
class SurveyRepositoryTest extends DefaultUserBaseTest {
    @Autowired
    WorkspaceRepository workspaceRepository;

    @Autowired
    SurveyRepository surveyRepository;

    private Workspace savedWorkspace;


    @BeforeEach
    void surveyInit() {
        super.userInit();
        //given
        final UUID userId = UUID.randomUUID();
        final LocalDateTime now = LocalDateTime.now();
        final Workspace workspace = Workspace.builder()
                .workspaceName("Workspace for servey")
                .workspaceOrder(0)
                .deletable(true)
                .createdDate(now)
                .updateDate(now)
                .createBy(userId)
                .updateBy(userId)
                .user(User.of(super.loginUser))
                .build();

        //when
        savedWorkspace = workspaceRepository.save(workspace);
    }

    @Test
    @DisplayName("Survey를 추가한다")
    void addSurvey() {
        final LocalDateTime now = LocalDateTime.now();
        ArrayList<Survey> surveys = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            Survey survey = Survey.builder()
                    .surveyName("survey " + i)
                    .badge("\uD83E\uDD7A")
                    .labelColor("red")
                    .workspace(savedWorkspace)
                    .createdDate(now)
                    .updateDate(now)
                    .createBy(savedWorkspace.getCreateBy())
                    .updateBy(savedWorkspace.getCreateBy())
                    .build();
            surveys.add(survey);
        }
        List<Survey> saveList = surveyRepository.saveAll(surveys);
        assertThat(saveList.size()).isEqualTo(5);
    }

    @AfterEach
    void removeAll(){
        surveyRepository.deleteAll();
        workspaceRepository.deleteAll();
    }
}