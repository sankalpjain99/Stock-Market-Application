package com.sankalp.sectorservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sankalp.sectorservice.entity.Sector;

@Repository
public interface SectorRepository extends JpaRepository<Sector, Integer>{

}
