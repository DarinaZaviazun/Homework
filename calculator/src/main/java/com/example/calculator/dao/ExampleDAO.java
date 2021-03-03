package com.example.calculator.dao;

import com.example.calculator.models.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface ExampleDAO extends JpaRepository<Example, Integer> {
}
