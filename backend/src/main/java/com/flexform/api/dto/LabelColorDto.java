package com.flexform.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class LabelColorDto {
    private String colorCode;
    private String colorName;
    private Short labelOrder;
}
