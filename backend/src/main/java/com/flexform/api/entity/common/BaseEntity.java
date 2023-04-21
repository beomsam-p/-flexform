package com.flexform.api.entity.common;

import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@MappedSuperclass
public abstract class BaseEntity {
    @Column(name = "create_date", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", nullable = false)
    protected LocalDateTime createdDate;

    @Column(name = "update_date", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", nullable = false)
    protected LocalDateTime updateDate;

    @Column(name = "create_by", columnDefinition = "BINARY(16)", nullable = false)
    protected UUID createBy;

    @Column(name = "update_by", columnDefinition = "BINARY(16)" , nullable = false)
    protected UUID updateBy;

    @PrePersist
    protected void onPrePersist() {
        if (this.createdDate == null) {
            this.createdDate = LocalDateTime.now();
        }

        if (this.updateDate == null) {
            this.updateDate = LocalDateTime.now();
        }
    }
}
