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
import com.sankalp.companyservice.entity.Ipo;
import com.sankalp.companyservice.service.IpoService;

@RestController
@RequestMapping("company")
public class IpoController {

	@Autowired
	private IpoService ipoService;
	
	@GetMapping("/getIpo")
	public ResponseEntity<List<Ipo>> getAllIpos(){
		return ResponseEntity.ok(ipoService.getAllIpo());
	}
	
	@PostMapping("/addIpo")
	public ResponseEntity<Ipo> createCompany(@RequestBody Ipo ipo){
		return ResponseEntity.ok(ipoService.addIpo(ipo));
	}
	
	@PutMapping("updateIpo/{ipoId}")
	public ResponseEntity updateCompany(@PathVariable(value = "ipoId") int id, @RequestBody Ipo ipo) {
		Ipo updatedIpo = ipoService.updateIpo(id, ipo);
		return (updatedIpo != null)?ResponseEntity.ok(updatedIpo):ResponseEntity.ok("Company with id "+id+" not found.");
	}
	
	@GetMapping("/getIpo/{companyId}")
	public ResponseEntity getIpoByCompany(@PathVariable(value = "companyId") int id){
		Ipo ipo =  ipoService.getIpoByCompany(id);
		return ipo!=null? ResponseEntity.ok(ipo): ResponseEntity.status(HttpStatus.NOT_FOUND).body("No IPO found with company id "+ id);
	}
	
}
