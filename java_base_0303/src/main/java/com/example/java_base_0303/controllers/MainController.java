package com.example.java_base_0303.controllers;

import com.example.java_base_0303.dao.UserDAO;
import com.example.java_base_0303.models.User;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@AllArgsConstructor
@RestController
public class MainController {
    private UserDAO userDAO;

    @GetMapping("/hello")
    public String hello() {
        return "HELLO";
    }

    @GetMapping("/user")
    public User getUser() {
        return new User("Dasha");
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        List<User> userList = Arrays.asList(
          new User("Pasha"),
          new User("Jura"),
          new User("Lena")
        );
        return userList;
    }

    @GetMapping("/saveuser")
    public void saveUser(){
        userDAO.save(new User("Lena"));
    }

    @GetMapping("/saveNewUser")
    public void saveNewUser(@RequestParam String name){
        userDAO.save(new User(name));
    }

    @GetMapping("/usersDB")
    public List<User> getUsersDB() {
        return userDAO.findAll();
    }
}
