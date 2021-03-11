package practic10032021;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

//Создайте HashMap, содержащий пары значений  - имя игрушки и объект игрушки (класс practic10032021.Product, age, size).
//Перебрать и распечатать пары значений - entrySet().
//Перебрать и распечатать набор из имен продуктов  - keySet().
//Перебрать и распечатать значения продуктов - values().
//отфильтровать мапу по ключам которые начинаются с какой-то буквы
//создать два листа с этой же мапы... один лист ключей другой лист значений
//создать лист со значений мапы где size > 100
//c мапы создать лист в который будут записаны только age
//если у игрушки возраст больше 5, то размер поменять на 1000
public class Main {

    public static void main(String[] args) {
        Map<String, Product> shop = new HashMap<>();
        shop.put("Kukla", new Product(2, 20));
        shop.put("Mashinka", new Product(3, 15));
        shop.put("Mishka", new Product(1, 25));
        shop.put("Baraban", new Product(5, 30));
        shop.put("LOL", new Product(10, 101));
        shop.put("Skakalka", new Product(11, 200));
        shop.put("Dziga", new Product(4, 20));
        shop.put("Nastolki", new Product(12, 35));

//        for (Map.Entry<String, practic10032021.Product> newmap : shop.entrySet()){
//            System.out.println(newmap.getKey() + " " + newmap.getValue().toString());
//        }
//
//        for (String newset1 : shop.keySet()){
//            System.out.println(newset1);
//        }
//
//        for(practic10032021.Product values : shop.values()){
//            System.out.println(values.getAge() + " " + values.getSize());
//        }
//
//        Set<Map.Entry<String, practic10032021.Product>> method1 = shop.entrySet();
//        Iterator<Map.Entry<String, practic10032021.Product>> iterator = method1.iterator();
//        while (iterator.hasNext()){
//            Map.Entry<String, practic10032021.Product> new22 = iterator.next();
//            System.out.println(new22.getKey() + " " + new22.getValue().toString());
//        }
//
//        shop.values().forEach(System.out::println);


        Stream<Map.Entry<String, Product>> stream = shop.entrySet().stream();
        //stream.forEach(entry -> System.out.println(entry));
        //stream.filter(entry -> entry.getValue().getAge() > 10)
        //        .forEach(System.out::println);
        //stream.filter(entry -> entry.getKey().charAt(0) == 'M')
        //        .forEach(System.out::println);
        //List<String> stringList = stream.map(Map.Entry::getKey).collect(Collectors.toList());
        //System.out.println(stringList);
        //ArrayList<practic10032021.Product> collect = stream.map(Map.Entry::getValue).collect(Collectors.toCollection(ArrayList::new));
        //System.out.println(collect.toString());
        //List<Map.Entry<String, practic10032021.Product>> collect = stream.filter(entry -> entry.getValue().getSize() > 100).collect(Collectors.toList());
        //System.out.println(collect);
//        List<Integer> collect = stream.map(entry -> entry.getValue().getAge()).collect(Collectors.toList());
//        System.out.println(collect);
//        stream.filter(entry -> entry.getValue().getAge() > 5)
//                .forEach(entry -> entry.getValue().setSize(1000));
//        System.out.println(shop);
    }
}
