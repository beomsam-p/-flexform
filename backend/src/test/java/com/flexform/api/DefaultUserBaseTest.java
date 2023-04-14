package com.flexform.api;

import com.flexform.api.dto.UserDto;
import com.flexform.api.entity.User;
import com.flexform.api.repository.UserRepository;
import com.flexform.api.service.user.UserService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.Optional;


@ActiveProfiles("test")
@SpringBootTest
public class DefaultUserBaseTest {
    @Autowired
    protected UserService userService;

    @Autowired
    protected UserRepository userRepository;

    protected UserDto loginUser;

    @BeforeEach
    void init() {
        Optional<User> foundUser = userRepository.findByEmail("admin@flexfrom.com");
        loginUser = foundUser.map(User::toDto)
                .orElseGet(this::saveDefaultUser);

    }

    private UserDto saveDefaultUser(){
        User user = User.builder()
                .email("admin@flexfrom.com")
                .nickname("test")
                .password("test")
                .profileImageUrl("test_url")
                .build();
        return userRepository
                .save(user)
                .toDto();
    }
}
