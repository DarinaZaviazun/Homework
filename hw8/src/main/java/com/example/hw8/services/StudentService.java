package com.example.hw8.services;

import com.example.hw8.models.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StudentService {
    Student save(Student student);
    List<Student> findAll();
    Student findOne(int id);
    void deleteOne(int id);
    Student updateOne(int id, String newName, int age);
}
