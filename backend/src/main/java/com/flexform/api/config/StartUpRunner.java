package com.flexform.api.config;

import com.flexform.api.dto.UserDto;
import com.flexform.api.entity.User;
import com.flexform.api.entity.Workspace;
import com.flexform.api.entity.common.Deleted;
import com.flexform.api.entity.common.QueryBy;
import com.flexform.api.entity.common.Timestamped;
import com.flexform.api.service.workspace.UserService;
import com.flexform.api.service.workspace.WorkspaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class StartUpRunner implements CommandLineRunner {
    private final UserService userService;
    private final WorkspaceService workspaceService;

    @Override
    public void run(String... args) {
        final UserDto dummyUser = userService.getLoginUser();
        final UserDto userDto = userService.joinUser(dummyUser);
        final UserDto joinedUserDto = userService.joinUser(userDto);
        final UUID userId = joinedUserDto.getUserId();
        final LocalDateTime now = LocalDateTime.now();
        for (int i = 0; i < 5; i++) {
            final Workspace workspace = Workspace.builder()
                    .workspaceId(UUID.randomUUID())
                    .user(User.toEntity(joinedUserDto))
                    .workspaceName("workspace" + (i + 1))
                    .workspaceOrder(i + 1)
                    .timestamped(new Timestamped(now, now))
                    .deleted(new Deleted(false))
                    .queryBy(new QueryBy(userId, userId))
                    .build();
            workspaceService.addWorkspace(workspace.toDto());
        }

    }
}
