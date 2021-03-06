package com.example.calculator.controllers;

import com.example.calculator.dao.ExampleDAO;
import com.example.calculator.models.Example;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
public class MainController {
    private ExampleDAO exDAO;

    @GetMapping("/calculator")
    public String calc(int a, String action, int b) {

        switch (action) {
            case "add":
                exDAO.save(new Example(a, action, b, a + b + ""));
                return "a + b = " + (a + b);
            case "sub":
                exDAO.save(new Example(a, action, b, a - b + ""));
                return "a - b = " + (a - b);
            case "div":
                if (b == 0) return "НА НОЛЬ ДЕЛИТЬ НЕЛЬЗЯ!";
                else {
                    exDAO.save(new Example(a, action, b, ((double) a / b) + ""));
                    return "a / b = " + ((double) a / b);
                }
            case "mult":
                exDAO.save(new Example(a, action, b, a * b + ""));
                return "a * b = " + (a * b);
            case "show":
                System.out.println(exDAO.examples());
                return exDAO.examples().toString();
            default:
                return "ERROR";
        }
    }
}
