package com.sankalp.exchangeservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.sankalp.exchangeservice.entity.StockExchange;
import com.sankalp.exchangeservice.service.StockExchangeService;

@RestController
@RequestMapping("stockExchange")
public class StockExchangeController {

	@Autowired
	private StockExchangeService stockExchangeService;
	
	@Autowired
	private RestTemplate restTemplate;
	
	@GetMapping("/exchanges")
	public ResponseEntity<List<StockExchange>> getStockExchanges(){
		return ResponseEntity.ok(stockExchangeService.getAllStockExchanges());
	}
	
	@GetMapping("/exchanges/{id}")
	public ResponseEntity getStockExchangeById(@PathVariable(value = "id") int id){
		StockExchange exchange  = stockExchangeService.getStockExchangeById(id);
		if(exchange != null)
			return ResponseEntity.ok(exchange);
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Stock Exchange found for the given Id");
	}

	@PostMapping("/exchanges")
	public ResponseEntity<StockExchange> addStockExchange(@RequestBody StockExchange stockExchange){
		return ResponseEntity.ok(stockExchangeService.addStockExchange(stockExchange));
	}
	
	@GetMapping("/company/{exchangeId}")
	public ResponseEntity getCompaniesByExchangeId(@PathVariable(value = "exchangeId") int id) {
		RestTemplate restTemplate = new RestTemplate();
		String apiUrl = "http://localhost:8084/company/getCompanyByExchange/" + id;
		ResponseEntity response = restTemplate.getForEntity(apiUrl , String.class);
		return response;
	}
	
}
