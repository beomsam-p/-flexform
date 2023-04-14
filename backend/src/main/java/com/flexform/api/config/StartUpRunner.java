package com.flexform.api.config;

import com.flexform.api.service.user.UserService;
import com.flexform.api.service.workspace.WorkspaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class StartUpRunner implements CommandLineRunner {
    
    @Override
    public void run(String... args) {
    }
}
