package com.flexform.api.dto;

import lombok.*;

import java.util.UUID;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class UserDto {
    private UUID userId;
    private String password;
    private String nickname;
    private String email;
    private String profileImageUrl;
}
