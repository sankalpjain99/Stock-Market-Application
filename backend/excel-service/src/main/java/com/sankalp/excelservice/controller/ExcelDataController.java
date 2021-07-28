package com.sankalp.excelservice.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.sankalp.excelservice.dto.ExcelDataDTO;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("excel")
public class ExcelDataController {
	
	@Autowired
	private RestTemplate restTemplate;
	
	@PostMapping("/uploadData")
	public ResponseEntity<List<ExcelDataDTO>> addExcelData(@RequestBody List<ExcelDataDTO> data) {
		String apiUrl = "http://COMPANY-SERVICE/company/addStockPrices";
		List<ExcelDataDTO> failedInserts = restTemplate.postForEntity(apiUrl, data, ArrayList.class).getBody();
		return ResponseEntity.ok(failedInserts);
	}
	
}
