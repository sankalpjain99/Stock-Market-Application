package com.sankalp.sectorservice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
public class Sector {

	@Id
	@GeneratedValue
	private int id;
	
	private String name;
	
	private String brief;
	
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
