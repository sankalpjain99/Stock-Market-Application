package com.sankalp.companyservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sankalp.companyservice.entity.Ipo;

@Repository
public interface IpoRepository extends JpaRepository<Ipo, Integer>{
	
	public Ipo findByCompanyId(@Param("companyId") int companyId);

}
