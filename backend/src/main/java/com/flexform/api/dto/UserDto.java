package com.flexform.api.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.util.UUID;

@Getter
@Builder
@ToString
public class UserDto {
    private UUID userId;
    private String password;
    private String nickname;
    private String email;
    private String profileImageUrl;
}
