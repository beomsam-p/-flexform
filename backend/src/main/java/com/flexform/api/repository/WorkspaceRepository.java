package com.flexform.api.repository;

import com.flexform.api.entity.Workspace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface WorkspaceRepository extends JpaRepository<Workspace, UUID> {
    @Query("SELECT w " +
            "FROM Workspace w " +
            "INNER JOIN FETCH w.user u " +
            "WHERE u.userId = :userId " +
            "ORDER BY w.workspaceOrder" +
            "")
    List<Workspace> findWorkspacesByUserId(@Param("userId") UUID id);


    @Query("SELECT w " +
            "FROM Workspace w " +
            "INNER JOIN FETCH w.user u " +
            "WHERE w.workspaceId = :workspaceId " +
            "AND u.userId = :userId " +
            "")
    Optional<Workspace> findWorkspaceById(@Param("workspaceId") UUID workspaceId, @Param("userId") UUID userId);
}
