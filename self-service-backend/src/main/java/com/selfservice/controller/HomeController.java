package com.selfservice.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	@RequestMapping("/createResource")
	public String createResource() {
		return "Hi";
	}
}
