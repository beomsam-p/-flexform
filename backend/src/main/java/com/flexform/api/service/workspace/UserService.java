package com.flexform.api.service.workspace;

import com.flexform.api.dto.UserDto;
import com.flexform.api.entity.User;

public interface UserService {
    UserDto getLoginUser();

    UserDto joinUser(UserDto user);

    UserDto findUser(UserDto user);
}
