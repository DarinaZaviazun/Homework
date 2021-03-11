package com.example.mvcdemo.models;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String model;
    private int horsepower;
    private String originalCountry;

    public Car(String model, int horsepower, String originalCountry) {
        this.model = model;
        this.horsepower = horsepower;
        this.originalCountry = originalCountry;
    }
}
