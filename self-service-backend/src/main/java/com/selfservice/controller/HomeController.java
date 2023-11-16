package com.selfservice.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	@RequestMapping("/")
	public String home() {
		return "Hello World v3 from app 1!";
	}
	
	@RequestMapping("/healthcheck")
	public String healthcheck() {
		return "healthcheck successfully";
	}
	
	@RequestMapping("/otlp")
	public String otlp() {
		return "Hello World from otlp v1!";
	}
}
