package com.example.calculator.dao;

import com.example.calculator.models.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.ArrayList;

@EnableJpaRepositories
public interface ExampleDAO extends JpaRepository<Example, Integer> {
   @Query("select e from Example e")
   ArrayList<Example> examples();
}
