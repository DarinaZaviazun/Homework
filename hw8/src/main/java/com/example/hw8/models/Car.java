package com.example.hw8.models;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@ToString(exclude = "users")
@EqualsAndHashCode
@NoArgsConstructor
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String model;

    @ManyToMany(cascade = CascadeType.ALL, mappedBy = "cars")
    private List<User> users = new ArrayList<>();

    public Car(String model) {
        this.model = model;
    }

}
