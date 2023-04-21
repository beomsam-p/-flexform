package com.flexform.api.repository;

import com.flexform.api.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface SurveyRepository extends JpaRepository<Survey, UUID> {
    @Query("SELECT s, w, u " +
            "FROM Survey s " +
            "INNER JOIN FETCH s.workspace w " +
            "INNER JOIN FETCH w.user  u " +
            "WHERE w.workspaceId = :workspaceId " +
            "AND u.userId = :userId " +
            "ORDER BY s.createdDate ")
    List<Survey> findSurveysByWorkspaceId(@Param("workspaceId") UUID workspaceId, @Param("userId") UUID userId);

    @Query("SELECT s, u " +
            "FROM Survey s " +
            "INNER JOIN FETCH s.workspace w " +
            "INNER JOIN FETCH w.user  u " +
            "WHERE s.surveyId = :surveyId " +
            "AND u.userId = :userId ")
    Optional<Survey> findSurveyById(@Param("surveyId") UUID surveyId, @Param("userId") UUID userId);
}
