package com.sankalp.companyservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sankalp.companyservice.entity.Company;
import com.sankalp.companyservice.repository.CompanyRepository;

@Service
public class CompanyService {
	
	@Autowired
	private CompanyRepository companyRepository;
	
	public List<Company> getAllCompanies(){
		return companyRepository.findAll();
	}
	
	public Company getCompanyById(int id){
		Optional<Company> companyOptional = companyRepository.findById(id);
		if(companyOptional.isPresent()) {
			return companyOptional.get();
		}
		return null;
	}
	
	public Company createCompany(Company company) {
		return companyRepository.save(company);
	}

	public Company updateCompany(int id, Company company) {
		Optional<Company> companyOptional = companyRepository.findById(id);
		if(companyOptional.isPresent()) {
			company.setId(id);
			return companyRepository.save(company);
		}
		return null;
	}
	
	public List<Company> getCompanyByPattern(String pattern){
		return companyRepository.findByNameLike(pattern);
	}
	
}
