package com.sankalp.companyservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sankalp.companyservice.entity.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer>{
	
	public List<Company> findByNameContainingIgnoreCase(String pattern);
	
}
