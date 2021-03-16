package com.example.hw8.controllers;

import com.example.hw8.DAO.PainterDAO;
import com.example.hw8.models.Color;
import com.example.hw8.models.Painter;
import com.example.hw8.models.Picture;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@AllArgsConstructor
public class PainterController {
    PainterDAO painterDAO;

    @GetMapping("/showP")
    public List<Painter> showPAinters(){
        return painterDAO.findAll();
    }
    @GetMapping("/savePwP")
    public void savePwP(){
        Painter painter = new Painter("Federico");
        Picture picture = new Picture("Buton");
        Picture picture1 = new Picture("Alyaska");
        List<Picture> pictures = new ArrayList<>();
        pictures.add(picture);
        pictures.add(picture1);
        painter.setPictures(pictures);
        painterDAO.save(painter);
    }
    @GetMapping("/savePwC")
    public void savePwC(){
        Painter painter = new Painter("Mikel");
        Color color = new Color("blue");
        Color color1 = new Color("red");
        List<Color> colors = new ArrayList<>();
        colors.add(color);
        colors.add(color1);
        painter.setColors(colors);
        painterDAO.save(painter);
    }
}
