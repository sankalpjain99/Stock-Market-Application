package com.sankalp.companyservice.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Ipo {

	@Id
	@GeneratedValue
	private int id;
	
	@Column(name="price_per_share")
	private double pricePerShare;
	
	@Column(name="total_shares")
	private int totalShares;
	
	@Column(name="open_datetime")
	private Timestamp dateTime;
	
	private String remarks;
	
	@OneToOne
	private Company company;
	
	@OneToOne
	private StockExchange stockExchange;

	public Ipo() {
		super();
	}

	public Ipo(int id, double pricePerShare, int totalShares, Timestamp dateTime, String remarks, Company company,
			StockExchange stockExchange) {
		super();
		this.id = id;
		this.pricePerShare = pricePerShare;
		this.totalShares = totalShares;
		this.dateTime = dateTime;
		this.remarks = remarks;
		this.company = company;
		this.stockExchange = stockExchange;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getPricePerShare() {
		return pricePerShare;
	}

	public void setPricePerShare(double pricePerShare) {
		this.pricePerShare = pricePerShare;
	}

	public int getTotalShares() {
		return totalShares;
	}

	public void setTotalShares(int totalShares) {
		this.totalShares = totalShares;
	}

	public Timestamp getDateTime() {
		return dateTime;
	}

	public void setDateTime(Timestamp dateTime) {
		this.dateTime = dateTime;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
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
