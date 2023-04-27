package com.flexform.api.repository;

import com.flexform.api.entity.LabelColor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface LabelColorRepository extends JpaRepository<LabelColor, UUID> {
    @Query("SELECT lc " +
            "FROM LabelColor lc " +
            "ORDER BY lc.labelOrder")
    List<LabelColor> findAllOrderByLabelOrder();
}
