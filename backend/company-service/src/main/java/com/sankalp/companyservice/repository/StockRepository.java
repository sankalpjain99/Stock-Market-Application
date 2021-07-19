package com.sankalp.companyservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sankalp.companyservice.entity.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Integer>{

	
}
