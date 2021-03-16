package com.example.hw8.DAO;

import com.example.hw8.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface StudentDAO extends JpaRepository<Student, Integer>{
}
