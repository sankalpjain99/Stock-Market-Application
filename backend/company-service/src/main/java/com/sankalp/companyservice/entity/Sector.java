package com.sankalp.companyservice.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
public class Sector {

	@Id
	@GeneratedValue
	private int id;
	
	private String name;
	
	private String brief;
	
	@OneToMany(mappedBy = "sector")
	@JsonProperty(access = Access.WRITE_ONLY)
	private List<Company> companies;
	
	public Sector() {
		super();
	}

	public Sector(int id, String name, String brief) {
		super();
		this.id = id;
		this.setName(name);
		this.setBrief(brief);
	}
	

	public int getId() {
		return id;
	}

	public List<Company> getCompanies() {
		return companies;
	}

	public void setCompanies(List<Company> companies) {
		this.companies = companies;
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
	
}
