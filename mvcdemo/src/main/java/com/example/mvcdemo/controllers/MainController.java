//package com.example.mvcdemo.controllers;
//
//import com.example.mvcdemo.DAO.ClientDAO;
//import com.example.mvcdemo.models.Client;
//import lombok.AllArgsConstructor;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//
//import java.util.Map;
//
//@Controller
//@AllArgsConstructor
//public class MainController {
//    private ClientDAO clientDAO;
//
//    @GetMapping("/")
//    public String main(){
//        return "index.html";
//    }
//
//    @GetMapping("/hello")
//    public String hello(Model model){
//        model.addAttribute("x", "hello world again");
//        return "hello.html";
//    }
//
//    @PostMapping("/save")
//    public String save(@RequestParam Map<String, String> map){
//        System.out.println(map);
//        return "index.html";
//    }
//
//    @GetMapping("/save")
//    public String saveGet(@RequestParam Map<String, String> map){
//        System.out.println(map);
//        return "index.html";
//    }
//
//    @GetMapping("/saveNew")
//    public String saveGet(@RequestParam("username") String name){
//        System.out.println(name);
//        return "index.html";
//    }
//
//    @GetMapping("/saveClient")
//    public String saveClient(@RequestParam("username") String name,
//                             Model model){
//        clientDAO.save(new Client(name));
//        model.addAttribute("clients", clientDAO.findAll());
//        return "clients.html";
//    }
//
//    @GetMapping("/clients/{id}")
//    public String getClient(@PathVariable int id,
//                            Model model){
//        Client one = clientDAO.getOne(id);
//        model.addAttribute("client", one);
//        return "client.html";
//    }
//}
