package com.example.hw8.services.Implementations;

import com.example.hw8.DAO.StudentDAO;
import com.example.hw8.models.Student;
import com.example.hw8.services.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class StudentServiceImplementationOne implements StudentService {
    private StudentDAO studentDAO;


    @Override
    public Student save(Student student) {
        return studentDAO.save(student);
    }

    @Override
    public List<Student> findAll() {
        return studentDAO.findAll();
    }

    @Override
    public Student findOne(int id) {
        Optional<Student> chosen = studentDAO.findById(id);
        return chosen.orElse(null);
    }

    @Override
    public void deleteOne(int id) {
        studentDAO.deleteById(id);
    }

    @Override
    public Student updateOne(int id, String newName, int age) {
        Student instance = studentDAO.getOne(id);
        instance.setName(newName);
        instance.setAge(age);
        return studentDAO.save(instance);
    }
}
