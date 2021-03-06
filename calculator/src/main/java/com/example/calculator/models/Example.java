package com.example.calculator.models;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Example {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int a;
    private String action;
    private int b;
    private String result;

    public Example(int a, String action, int b, String result) {
        this.a = a;
        this.action = action;
        this.b = b;
        this.result = result;
    }



}
