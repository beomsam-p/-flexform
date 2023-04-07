package com.flexform.api.service;

import com.flexform.api.dto.UserDto;
import com.flexform.api.entity.User;
import com.flexform.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DummyUserService implements UserService {
    private final UserRepository userRepository;
    @Override
    public UserDto getLoginUser() {
        return UserDto.builder()
                .email("admin@flexfrom.com")
                .password("pwd")
                .nickname("admin")
                .profileImageUrl("https://lh3.googleusercontent.com/ogw/AAEL6sieq28b9wewpwsuK00glJRZ4X_xfDa5f9U2nSCBaw=s32-c-mo")
                .build();
    }

    @Override
    public UserDto joinUser(UserDto userDto) {
        final User user = User.toEntity(userDto);
        return userRepository.save(user).toDto();
    }

    @Override
    public UserDto findUser(UserDto userDto) {
        final User userEntity = userRepository.findByEmail(userDto.getEmail()).orElseThrow(RuntimeException::new);
        return userEntity.toDto();
    }
}