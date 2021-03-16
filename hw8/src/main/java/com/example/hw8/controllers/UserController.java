package com.example.hw8.controllers;

import com.example.hw8.DAO.UserDAO;
import com.example.hw8.models.Car;
import com.example.hw8.models.Product;
import com.example.hw8.models.User;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {
    UserDAO userDAO;

    @GetMapping
    public List<User> showall(){
        return userDAO.findAll();
    }

    @GetMapping("/saveWP")
    public void save(){
        User user = new User();
        user.setName("Dasha");
        List<Product> productList = new ArrayList<>();
        productList.add(new Product("banan"));
        productList.add(new Product("watermelon"));
        user.setProducts(productList);
        userDAO.save(user);
    }

    @GetMapping("/saveWC")
    public void saveWithCars(){
        User user = new User();
        user.setName("Pasha");
        List<Car> cars = new ArrayList<>();
        cars.add(new Car("mazda"));
        cars.add(new Car("volvo"));
        user.setCars(cars);
        userDAO.save(user);
    }

}
