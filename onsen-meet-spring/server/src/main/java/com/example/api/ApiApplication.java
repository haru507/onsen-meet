package com.example.api;

import java.util.ArrayList;

import com.example.api.domain.Role;
import com.example.api.domain.User;
import com.example.api.service.UserService;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {
			userService.saveRole(new Role(null, "ROLE_USER"));
			userService.saveRole(new Role(null, "ROLE_MANAGER"));
			userService.saveRole(new Role(null, "ROLE_ADMIN"));
			userService.saveRole(new Role(null, "ROLE_SUPER_ADMIN"));

			userService.saveUser(new User(null, "test1@test.com", "test1", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "test2@test.com", "test2", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "test3@test.com", "test3", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "test4@test.com", "test4", "1234", new ArrayList<>()));

			userService.addRoleToUser("test1", "ROLE_USER");
			userService.addRoleToUser("test1", "ROLE_MANAGER");
			userService.addRoleToUser("test2", "ROLE_MANAGER");
			userService.addRoleToUser("test3", "ROLE_ADMIN");
			userService.addRoleToUser("test4", "ROLE_SUPER_ADMIN");
			userService.addRoleToUser("test4", "ROLE_ADMIN");
			userService.addRoleToUser("test4", "ROLE_USER");
		};
	}
}
