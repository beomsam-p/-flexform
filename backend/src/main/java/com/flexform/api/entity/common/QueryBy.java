package com.flexform.api.entity.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.util.UUID;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class QueryBy {
    @Column(name = "create_by", columnDefinition = "BINARY(16)", nullable = false)
    private UUID createBy;

    @Column(name = "update_by", columnDefinition = "BINARY(16)" , nullable = false)
    private UUID updateBy;
}
