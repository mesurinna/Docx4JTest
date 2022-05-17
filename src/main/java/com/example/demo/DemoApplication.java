package com.example.demo;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.service.FilesStorageService;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@Controller
public class DemoApplication implements CommandLineRunner {
	@Resource
	FilesStorageService storageService;

	@GetMapping("/resource")
	@ResponseBody
	public Map<String, Object> home() {
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("id", "v0.1.1");
		model.put("content", "Tommaso Liberio");
		return model;
	}

	@GetMapping(value = "/{path:[^\\.]*}")
	public String redirect() {
		return "forward:/";
	}

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... arg) throws Exception {
		storageService.deleteAll();
		storageService.init();
	}
}
