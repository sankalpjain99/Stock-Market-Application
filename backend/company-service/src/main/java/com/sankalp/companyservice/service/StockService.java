package com.sankalp.companyservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sankalp.companyservice.entity.Stock;
import com.sankalp.companyservice.repository.StockRepository;

@Service
public class StockService {

	@Autowired
	private StockRepository stockRepository;
	
	public List<Stock> getAllStocks() {
		return stockRepository.findAll();
	}
	
	public Stock addStock(Stock stock) {
		return stockRepository.save(stock);
	}
	
}
