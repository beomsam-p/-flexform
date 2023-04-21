package com.flexform.api.service.survey;

import com.flexform.api.dto.SurveyDto;
import com.flexform.api.dto.UserDto;
import com.flexform.api.dto.WorkspaceDto;
import com.flexform.api.entity.Survey;
import com.flexform.api.entity.Workspace;
import com.flexform.api.repository.SurveyRepository;
import com.flexform.api.service.user.UserService;
import com.flexform.api.service.workspace.WorkspaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SurveyServiceImpl implements SurveyService {
    private final SurveyRepository surveyRepository;
    private final UserService userService;
    private final WorkspaceService workspaceService;

    @Override
    public List<SurveyDto> findSurveys(UUID workspaceId, UserDto loginUser) {
        UserDto user = userService.findUser(loginUser);
        return surveyRepository.findSurveysByWorkspaceId(workspaceId, user.getUserId())
                .stream()
                .map(Survey::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public SurveyDto addSurvey(SurveyDto surveyDto, UUID workspaceId, UserDto loginUser) {
        UserDto user = userService.findUser(loginUser);
        WorkspaceDto workspaceDto = workspaceService.getWorkspace(workspaceId, loginUser);
        surveyDto.setWorkspace(workspaceDto);
        surveyDto.setCreateBy(user.getUserId());
        surveyDto.setUpdateBy(user.getUserId());
        Survey survey = Survey.of(surveyDto);
        return surveyRepository.save(survey).toDto();
    }

    @Override
    @Transactional
    public SurveyDto updateSurvey(SurveyDto surveyDto, UserDto loginUser) {
        UserDto user = userService.findUser(loginUser);
        Survey survey = this.findSurvey(surveyDto.getSurveyId(), user.getUserId());
        survey.setBadge(surveyDto.getBadge());
        survey.setLabelColor(surveyDto.getLabelColor());
        survey.setUpdateDate(LocalDateTime.now());
        survey.setUpdateBy(user.getUserId());
        return survey.toDto();
    }

    @Override
    public SurveyDto deleteSurvey(UUID surveyId, UserDto loginUser) {
        UserDto user = userService.findUser(loginUser);
        Survey survey = this.findSurvey(surveyId, user.getUserId());
        surveyRepository.delete(survey);
        return survey.toDto();
    }

    @Override
    @Transactional
    public SurveyDto moveWorkspace(UUID surveyId, UUID toWorkspaceId, UserDto loginUser) {
        UserDto user = userService.findUser(loginUser);
        Survey survey = this.findSurvey(surveyId, user.getUserId());
        WorkspaceDto toWorkspaceDto = workspaceService.getWorkspace(toWorkspaceId, loginUser);
        survey.setWorkspace(Workspace.of(toWorkspaceDto));
        return survey.toDto();
    }

    @Override
    public SurveyDto copySurvey(UUID surveyId, UserDto loginUser) {
        UserDto user = userService.findUser(loginUser);
        Survey survey = this.findSurvey(surveyId, user.getUserId());
        Survey copySurvey = Survey.builder()
                .surveyName(survey.getSurveyName() + "(copy)")
                .build();
        BeanUtils.copyProperties(survey, copySurvey, "surveyId", "surveyName");
        return surveyRepository.save(copySurvey).toDto();
    }

    private Survey findSurvey(UUID surveyId, UUID userId) {
        return surveyRepository.findSurveyById(surveyId, userId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 아이디:" + surveyId));
    }
}
