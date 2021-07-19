package com.sankalp.companyservice.repository;

import java.sql.Timestamp;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sankalp.companyservice.entity.StockPrice;

@Repository
public interface StockPriceRepository extends JpaRepository<StockPrice, Integer>{
	
	@Transactional
	@Modifying
	@Query(value="insert into stock_price(price, timestamp, stock_id) values(:price, :timestamp, (select id from stock where company_id= :companyId and stock_exchange_id= :exchangeId));", nativeQuery = true)
	int addStockPrice(@Param("companyId") int companyId, @Param("exchangeId") int exchangeId, @Param("price")  double price, @Param("timestamp") Timestamp timestamp); 
	
}
