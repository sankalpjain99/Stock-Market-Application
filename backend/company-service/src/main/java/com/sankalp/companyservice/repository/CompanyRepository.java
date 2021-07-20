package com.sankalp.companyservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sankalp.companyservice.entity.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer>{
	
	public List<Company> findByNameContainingIgnoreCase(String pattern);
	
	@Query(value = "select * from company where id in (select company_id from stock where stock_exchange_id=:exchangeId);", nativeQuery = true)
	public List<Company> findCompanyByExchangeId(@Param("exchangeId") int id);
	
}
