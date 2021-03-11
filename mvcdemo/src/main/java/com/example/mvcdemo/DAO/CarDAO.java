package com.example.mvcdemo.DAO;

import com.example.mvcdemo.models.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Service;

@EnableJpaRepositories
@Service
public interface CarDAO extends JpaRepository<Car, Integer> {
}
