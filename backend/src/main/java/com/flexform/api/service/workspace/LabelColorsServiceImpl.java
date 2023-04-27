package com.flexform.api.service.workspace;

import com.flexform.api.dto.LabelColorDto;
import com.flexform.api.entity.LabelColor;
import com.flexform.api.repository.LabelColorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LabelColorsServiceImpl implements LabelColorService{
    private final LabelColorRepository labelColorRepository;
    @Override
    public List<LabelColorDto> getAllLabelColors() {
        return labelColorRepository
                .findAllOrderByLabelOrder()
                .stream()
                .map(LabelColor::toDto)
                .collect(Collectors.toList());
    }
}
