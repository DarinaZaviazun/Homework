package com.example.mvcdemo.controllers;

import com.example.mvcdemo.DAO.CarDAO;
import com.example.mvcdemo.models.Car;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

@AllArgsConstructor
@Controller
public class CarController {
    private CarDAO carDAO;

    @GetMapping("/")
    public String main(){
        return "index.html";
    }

    @PostMapping("/cars")
    public List<Car> getAllCars(){
        return carDAO.findAll();
    }

    @PostMapping("/saveCar")
    public String saveCar(@RequestParam Map<String, String> newCar, Model model){
        carDAO.save(new Car(newCar.get("model"), Integer.parseInt(newCar.get("horsepower")), newCar.get("originalCountry")));
        model.addAttribute("cars", carDAO.findAll());
        return "cars.html";
    }

    @GetMapping("/cars/{id}")
    public String getOneCar(@PathVariable int id, Model model){
        Car theOne = carDAO.getOne(id);
        System.out.println(id);
        model.addAttribute("car", theOne);
        return "car.html";
    }
}
