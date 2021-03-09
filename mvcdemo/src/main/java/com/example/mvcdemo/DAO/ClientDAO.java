package com.example.mvcdemo.DAO;

import com.example.mvcdemo.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Service;

@Service
@EnableJpaRepositories
public interface ClientDAO extends JpaRepository<Client, Integer> {
}
