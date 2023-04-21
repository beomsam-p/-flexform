package com.flexform.api.service.survey;

import com.flexform.api.dto.SurveyDto;
import com.flexform.api.dto.UserDto;

import java.util.List;
import java.util.UUID;

public interface SurveyService {
    List<SurveyDto> findSurveys(UUID workspaceId, UserDto loginUser);

    SurveyDto addSurvey(SurveyDto surveyDto, UUID workspaceId, UserDto loginUser);

    SurveyDto updateSurvey(SurveyDto surveyDto, UserDto loginUser);

    SurveyDto deleteSurvey(UUID surveyId, UserDto loginUser);

    SurveyDto moveWorkspace(UUID surveyId, UUID toWorkspaceId, UserDto loginUser);

    SurveyDto copySurvey(UUID surveyId, UserDto loginUser);
}
