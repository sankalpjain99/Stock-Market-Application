package com.sankalp.companyservice.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Stock {

	@Id
	@GeneratedValue
	private int id;
	
	@Column(name="stock_code")
	private String stockCode;
	
	@ManyToOne
	private Company company;
	
	@ManyToOne
	private StockExchange stockExchange;

	public Stock() {
		super();
	}

	public Stock(int id, String stockCode, Company company, StockExchange stockExchange) {
		super();
		this.id = id;
		this.stockCode = stockCode;
		this.company = company;
		this.stockExchange = stockExchange;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStockCode() {
		return stockCode;
	}

	public void setStockCode(String stockCode) {
		this.stockCode = stockCode;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public StockExchange getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(StockExchange stockExchange) {
		this.stockExchange = stockExchange;
	}
	
}
