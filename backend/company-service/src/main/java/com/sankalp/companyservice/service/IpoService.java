package com.sankalp.companyservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sankalp.companyservice.entity.Ipo;
import com.sankalp.companyservice.repository.IpoRepository;

@Service
public class IpoService {

	@Autowired
	private IpoRepository ipoRepository;
	
	public List<Ipo> getAllIpo() {
		return ipoRepository.findAll();
	}
	
	public Ipo addIpo(Ipo ipo) {
		return ipoRepository.save(ipo);
	}
	
	public Ipo getIpoByCompany(int id){
		return ipoRepository.findByCompanyId(id);
	}
	
}
