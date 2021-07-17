package com.sankalp.sectorservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sankalp.sectorservice.entity.Company;
import com.sankalp.sectorservice.entity.Sector;
import com.sankalp.sectorservice.service.SectorService;

@RestController
@RequestMapping("sectors")
public class SectorController {

	@Autowired
	private SectorService sectorService;
	
	@GetMapping("/sector")
	public ResponseEntity<List<Sector>> getAllSectors(){
		return ResponseEntity.ok(sectorService.getAllSectors());
	}
	
	@GetMapping("/sector/{id}")
	public ResponseEntity getSectorById(@PathVariable(value = "id") int id){
		Sector sector = sectorService.getSectorById(id);
		if(sector != null)
			return ResponseEntity.ok(sector);
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Sector found for the given Id");
	}
	
	@PostMapping("/sector")
	public ResponseEntity<Sector> createSector(@RequestBody Sector sector){
		return ResponseEntity.ok(sectorService.createSector(sector));
	}
	
	@GetMapping("companies/{id}")
	public ResponseEntity<List<Company>> getAllCompaniesBySector(@PathVariable(value = "id") int id){
		return ResponseEntity.ok(sectorService.getCompaniesBySector(id));
	}
	
}
