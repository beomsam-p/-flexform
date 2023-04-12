package com.flexform.api.config;

import com.flexform.api.service.user.UserService;
import com.flexform.api.service.workspace.WorkspaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class StartUpRunner implements CommandLineRunner {
    private final UserService userService;
    private final WorkspaceService workspaceService;

    @Override
    public void run(String... args) {
//        UserDto dummyUser = UserDto.builder()
//                .email("admin@flexfrom.com")
//                .password("pwd")
//                .nickname("admin")
//                .profileImageUrl("https://lh3.googleusercontent.com/ogw/AAEL6sieq28b9wewpwsuK00glJRZ4X_xfDa5f9U2nSCBaw=s32-c-mo")
//                .build();
//        final UserDto userDto = userService.joinUser(dummyUser);
//        final UUID userId = userDto.getUserId();
//        final LocalDateTime now = LocalDateTime.now();
//        final WorkspaceDto workspaceDto0 = WorkspaceDto.builder()
//                .workspaceId(UUID.randomUUID())
//                .workspaceName("workspace" + 0)
//                .workspaceOrder(0)
//                .createDate(LocalDateTime.now())
//                .updateDate(LocalDateTime.now())
//                .deletable(false)
//                .createBy(userId)
//                .updateBy(userId)
//                .build();
//        workspaceService.addWorkspace(workspaceDto0);
//        for (int i = 1; i < 5; i++) {
//            final Workspace workspace = Workspace.builder()
//                    .workspaceId(UUID.randomUUID())
//                    .workspaceName("workspace" + (i + 1))
//                    .workspaceOrder(i + 1)
//                    .timestamped(new Timestamped(now, now))
//                    .deletable(true)
//                    .queryBy(new QueryBy(userId, userId))
//                    .build();
//            workspaceService.addWorkspace(workspace.toDto());
//        }
//

    }
}
