package com.example.hw8.controllers;
import com.example.hw8.models.Student;
import com.example.hw8.services.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class StudentController {
    StudentService studentService;

    @PostMapping("/saveStudent")
    public void saveUser(){
        studentService.save(new Student("Lesya"));
    }

    @PostMapping("/findAll")
    public List<Student> findAll(){
        return studentService.findAll();
    }

    @PostMapping("/findOne")//
    public Student findOne(){
        return studentService.findOne(1);
    }

    @PostMapping("/deleteOne")
    public void deleteOne(){
        studentService.deleteOne(3);
    }

    @PostMapping("/updateOne")
    public void update(){
        studentService.updateOne(4, "Elena");
    }
}
