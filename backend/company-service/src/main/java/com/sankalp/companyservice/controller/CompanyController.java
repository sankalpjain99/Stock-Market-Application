package com.sankalp.companyservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sankalp.companyservice.entity.Company;
import com.sankalp.companyservice.service.CompanyService;

@RestController
@RequestMapping("company")
public class CompanyController {
	
	@Autowired
	private CompanyService companyService;
	
	@GetMapping("/getCompany")
	public ResponseEntity<List<Company>> getAllCompanies(){
		return ResponseEntity.ok(companyService.getAllCompanies());
	}
	
	@GetMapping("/getCompany/{id}")
	public ResponseEntity<Company> getCompanyById(@PathVariable(value = "id") int id){
		return ResponseEntity.ok(companyService.getCompanyById(id));
	}
	
	@PostMapping("/addCompany")
	public ResponseEntity<Company> createCompany(@RequestBody Company company){
		return ResponseEntity.ok(companyService.createCompany(company));
	}
	
	@PutMapping("/updateCompany/{id}")
	public ResponseEntity updateCompany(@PathVariable(value="id") int id, @RequestBody Company company){
		Company updatedCompany = companyService.updateCompany(id, company);
		return (updatedCompany != null)?ResponseEntity.ok(updatedCompany):ResponseEntity.status(HttpStatus.NOT_FOUND).body("Company with id "+id+" not found.");
	}
	
	@GetMapping("/getCompanyByPattern/{pattern}")
	public ResponseEntity<List<Company>> getCompanyByPattern(@PathVariable("pattern") String pattern){
		return ResponseEntity.ok(companyService.getCompanyByPattern(pattern));
	}
	
	@GetMapping("/getCompanyByExchange/{id}")
	public ResponseEntity<List<Company>> getCompanyByExchange(@PathVariable("id") int id){
		return ResponseEntity.ok(companyService.getCompanyByStockExchangeId(id));
	}
	
}
