package com.sankalp.companyservice.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sankalp.companyservice.dto.ExcelDataDTO;
import com.sankalp.companyservice.entity.StockPrice;
import com.sankalp.companyservice.repository.StockPriceRepository;

@Service
public class StockPriceService {

	@Autowired
	private StockPriceRepository stockPriceRepository;
	
	public List<StockPrice> getAllStockPrices() {
		return stockPriceRepository.findAll();
	}
	
	public List<ExcelDataDTO> addStockPrices(List<ExcelDataDTO> excelData){
		List<ExcelDataDTO> failedInserts = new ArrayList<>();
		for(ExcelDataDTO data:excelData) {
			try {
				stockPriceRepository.addStockPrice(data.getCompanyId(), data.getExchangeId(), data.getPrice(), data.getTimestamp());
			} catch(Exception e) {
				failedInserts.add(data);
			}			
		}
		return failedInserts;
	}
	
	public List<StockPrice> getStockPriceByCompany(int companyId, int exchangeId, String before, String after){
		return stockPriceRepository.getStockPricesByCompany(companyId, exchangeId, before, after);
	}
	
}
