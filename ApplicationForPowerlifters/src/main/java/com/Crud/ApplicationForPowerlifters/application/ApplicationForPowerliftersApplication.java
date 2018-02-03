package com.Crud.ApplicationForPowerlifters.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.Crud.ApplicationForPowerlifters")
@EnableJpaRepositories(basePackages = "com.Crud.ApplicationForPowerlifters.repostiory")
@EntityScan(basePackages = "com.Crud.ApplicationForPowerlifters.domains")
public class ApplicationForPowerliftersApplication {

	public static void main(String[] args) {
        System.out.println("kebab");
        SpringApplication.run(ApplicationForPowerliftersApplication.class, args);
	}
}
