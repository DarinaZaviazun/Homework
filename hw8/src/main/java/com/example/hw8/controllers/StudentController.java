package com.example.hw8.controllers;
import com.example.hw8.models.Student;
import com.example.hw8.services.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class StudentController {
    StudentService studentService;

    @PostMapping("/saveStudent")
    public void saveUser(@RequestParam String name, @RequestParam int age){
        studentService.save(new Student(name, age));
    }

    @PostMapping("/findAll")
    public List<Student> findAll(){
        return studentService.findAll();
    }

    @PostMapping("/{id}/find")
    public Student findOne(@PathVariable int id){
        return studentService.findOne(id);
    }

    @PostMapping("/{id}/delete")
    public void deleteOne(@PathVariable int id){
        studentService.deleteOne(id);
    }

    @PostMapping("/{id}/update")
    public void update(@PathVariable int id, @RequestParam String name, @RequestParam int age){
        System.out.println(name);
        studentService.updateOne(id, name, age);
    }
}
