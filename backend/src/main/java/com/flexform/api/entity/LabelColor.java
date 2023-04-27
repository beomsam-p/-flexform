package com.flexform.api.entity;

import com.flexform.api.dto.LabelColorDto;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "label_color")
public class LabelColor {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name="uuid2", strategy = "uuid2")
    @Column(name = "label_color_id", columnDefinition = "BINARY(16)")
    private UUID labelColorId;

    @Column(name = "color_code")
    private String colorCode;

    @Column(name = "color_name")
    private String colorName;

    @Column(name = "label_order")
    private Short labelOrder;

    public LabelColorDto toDto(){
        return LabelColorDto.builder()
                .colorCode(this.colorCode)
                .colorName(this.colorName)
                .labelOrder(this.labelOrder)
                .build();
    }

}
