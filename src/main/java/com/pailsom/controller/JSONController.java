package com.pailsom.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pailsom.model.Property;
import com.pailsom.model.PropertyWrapper;

@RestController
public class JSONController {

	@GetMapping("welcome")
	public ModelAndView loginMessage() {
		// return "/jsp/welcome.jsp";
		return new ModelAndView("welcome");
	}

	@PostMapping("submit")
	public void sumit(@RequestBody PropertyWrapper propertyWrapper) throws IOException {		
		propertyWrapper.getProperties().forEach(p->{System.out.println(p.toString());});
	}
	
	@GetMapping("loadProperty")
	@ResponseBody
	public PropertyWrapper loadProperty() {
		Property property = new Property();
		property.setId(100);property.setName("Property1");property.setOrder("DES");
		PropertyWrapper wrapper = new PropertyWrapper();
		List<Property> properties = new ArrayList<>();
		properties.add(property);
		wrapper.setProperties(properties);
		return wrapper;
	}
}
