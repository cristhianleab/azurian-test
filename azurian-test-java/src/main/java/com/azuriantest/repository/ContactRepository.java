package com.azuriantest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.azuriantest.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> { }