package com.flexform.api.repository;

import com.flexform.api.entity.Workspace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface WorkspaceRepository extends JpaRepository<Workspace, UUID> {
    @Query("SELECT w FROM Workspace w INNER JOIN FETCH w.user u WHERE u.userId = :userId")
    List<Workspace> findWorkspacesByUserId(@Param("userId") UUID id);
}
