package com.example.hw8.DAO;

import com.example.hw8.models.Painter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface PainterDAO extends JpaRepository<Painter, Integer> {
}
