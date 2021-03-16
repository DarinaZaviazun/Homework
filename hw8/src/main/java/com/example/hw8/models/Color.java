package com.example.hw8.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@ToString(exclude = {"painters"})
public class Color {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String color;

    @ManyToMany(cascade = CascadeType.ALL, mappedBy = "colors")
    @JsonIgnore
    private List<Painter> painters;

    public Color(String color) {
        this.color = color;
    }
}
