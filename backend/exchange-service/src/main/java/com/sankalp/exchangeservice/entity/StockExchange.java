package com.sankalp.exchangeservice.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="STOCK_EXCHANGE")
public class StockExchange {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private int id;
	
	@Column(name = "NAME")
	private String name;
	
	@Column(name = "BRIEF")
	private String brief;
	
	@Column(name = "REMARKS")
	private String remarks;
	
	@OneToOne(cascade = {CascadeType.ALL})
	private Address address;
	
	public StockExchange() {
		super();
	}

	public StockExchange(int id, String name, String brief, String remarks, Address addressId) {
		super();
		this.id = id;
		this.name = name;
		this.brief = brief;
		this.remarks = remarks;
		this.address = addressId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
	
}
