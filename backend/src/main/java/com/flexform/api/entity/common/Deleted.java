package com.flexform.api.entity.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Getter
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class Deleted {
    @Column(name = "is_delete", columnDefinition = "boolean default false", nullable = false)
    private boolean isDelete ;
}
