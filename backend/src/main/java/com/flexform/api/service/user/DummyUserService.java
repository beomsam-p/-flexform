package com.flexform.api.service.user;

import com.flexform.api.dto.UserDto;
import com.flexform.api.entity.User;
import com.flexform.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DummyUserService implements UserService {
    private final UserRepository userRepository;

    @Override
    public UserDto getLoginUser() {
        UserDto user = UserDto.builder()
                .email("admin@flexfrom.com")
                .build();
        return this.findUser(user);
    }

    @Override
    public UserDto joinUser(UserDto userDto) {
        final User user = User.of(userDto);
        return userRepository.save(user).toDto();
    }

    @Override
    public UserDto findUser(UserDto userDto) {
        final User userEntity = userRepository.findByEmail(userDto.getEmail()).orElseThrow(RuntimeException::new);
        return userEntity.toDto();
    }
}