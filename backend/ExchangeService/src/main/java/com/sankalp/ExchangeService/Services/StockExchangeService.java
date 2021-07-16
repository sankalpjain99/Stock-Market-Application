package com.sankalp.ExchangeService.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sankalp.ExchangeService.Entities.StockExchange;
import com.sankalp.ExchangeService.Repositories.StockExchangeRepository;

@Service
public class StockExchangeService {
	
	@Autowired
	private StockExchangeRepository stockExchangeRepository;
	
	public List<StockExchange> getAllStockExchanges(){
		return stockExchangeRepository.findAll();
	}
	
	public StockExchange addStockExchange(StockExchange stockExchange) {
		return stockExchangeRepository.save(stockExchange);
	}
	
	public StockExchange getStockExchangeById(int id) {
		Optional<StockExchange> stockExchangeOptional = stockExchangeRepository.findById(id);
		if(stockExchangeOptional.isPresent())
			return stockExchangeOptional.get();
		return null;
	}
	
}
