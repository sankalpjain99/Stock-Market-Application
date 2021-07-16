package com.sankalp.ExchangeService.Controllers;

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

import com.sankalp.ExchangeService.Entities.StockExchange;
import com.sankalp.ExchangeService.Services.StockExchangeService;

@RestController
@RequestMapping("stockExchange")
public class StockExchangeController {

	@Autowired
	private StockExchangeService stockExchangeService;
	
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
	
}
