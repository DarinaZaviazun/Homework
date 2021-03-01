package task2;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        User user1 = new User(1, "Dasha", 29, Sex.FEMALE);
        User user2 = new User(2, "Pasha", 30, Sex.MALE);
        User user3 = new User(3, "Valya", 61, Sex.FEMALE);
        User user4 = new User(4, "Lena", 54, Sex.FEMALE);
        User user5 = new User(5, "Jura", 55, Sex.MALE);
        User user6 = new User(6, "Masha", 32, Sex.FEMALE);
        User user7 = new User(7, "Lesha", 33, Sex.MALE);
        User user8 = new User(8, "Vasilisa", 3, Sex.FEMALE);
        User user9 = new User(9, "Alina", 30, Sex.FEMALE);
        User user10 = new User(10, "Andrej", 32, Sex.MALE);

        ArrayList<User> list = new ArrayList<>();
        list.add(user1);
        list.add(user2);
        list.add(user3);
        list.add(user4);
        list.add(user5);
        list.add(user6);
        list.add(user7);
        list.add(user8);
        list.add(user9);
        list.add(user10);

        for (User user : list) {
            if (user.getId() % 2 == 0) System.out.println(user);
        }
        System.out.println("------------");
        for (User user : list) {
            if (user.getName().length() > 5) System.out.println(user);
        }
        System.out.println("------------");
        for (User user : list) {
            if (user.getSex().equals(Sex.FEMALE)) System.out.println(user);
        }
    }
}
