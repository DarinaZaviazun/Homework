package com.example.hw8.models;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@ToString(exclude = {"pictures", "colors"})
public class Painter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "painter_id")
    private List<Picture> pictures;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Color> colors;

    public Painter(String name) {
        this.name = name;
    }
}
