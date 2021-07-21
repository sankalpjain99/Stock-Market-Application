package com.sankalp.sectorservice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Company {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private long turnover;
	
	private String ceo;
	
	private String brief;
	
	private String bod;
	
	@ManyToOne
	private Sector sector;

	public Company() {
		super();
	}

	public Company(int id, String name, long turnover, String ceo, String brief, Sector sector) {
		super();
		this.id = id;
		this.name = name;
		this.turnover = turnover;
		this.ceo = ceo;
		this.brief = brief;
		this.sector = sector;
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

	public long getTurnover() {
		return turnover;
	}

	public void setTurnover(long turnover) {
		this.turnover = turnover;
	}

	public String getCeo() {
		return ceo;
	}

	public void setCeo(String ceo) {
		this.ceo = ceo;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	public Sector getSector() {
		return sector;
	}

	public void setSector(Sector sector) {
		this.sector = sector;
	}

	public String getBod() {
		return bod;
	}

	public void setBod(String bod) {
		this.bod = bod;
	}
	
}
