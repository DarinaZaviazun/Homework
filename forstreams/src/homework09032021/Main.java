package homework09032021;
//Створити енум Стать.
//        Створити клас Юзер з плоями : ід, ім'я , вік, Стать.
//        Ствроити 10 об'єктів Юзера з відповідними ід (1-10)
//        Свторити  arrayList , та покласти цих юзерів в arayList.
//        - Проітерувати колекцію юзерів, вивевши тільки юзерів з парним значенням ід
//        - Проітерувати колекцію юзерів, вивевши тільки юзерів з ім'ям , довжина якого більше ніж 5 символів
//        - Проітерувати колекцію юзерів, вивевши тільки юзерів жінок

import java.util.ArrayList;
import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) {
        User user1 = new User(1, "Dasha", 29, Sex.FEMALE);
        User user2 = new User(2, "Pasha", 30, Sex.MALE);
        User user3 = new User(3, "Alina", 30, Sex.FEMALE);
        User user4 = new User(4, "Andrej", 32, Sex.MALE);
        User user5 = new User(5, "Lena", 54, Sex.FEMALE);
        User user6 = new User(6, "Jura", 55, Sex.MALE);
        User user7 = new User(7, "Valja", 61, Sex.FEMALE);
        User user8 = new User(8, "Masha", 32, Sex.FEMALE);
        User user9 = new User(9, "Lesha", 33, Sex.MALE);
        User user10 = new User(10, "Vasilisa", 3, Sex.FEMALE);

        ArrayList<User> users = new ArrayList<>();
        users.add(user1);
        users.add(user2);
        users.add(user3);
        users.add(user4);
        users.add(user5);
        users.add(user6);
        users.add(user7);
        users.add(user8);
        users.add(user9);
        users.add(user10);

        Stream<User> stream = users.stream();
//        stream.filter(user -> user.getId() % 2 == 0).forEach(System.out::println);
//        stream.filter(user -> user.getName().length() > 5).forEach(System.out::println);
        stream.filter(user -> user.getSex().equals(Sex.FEMALE)).forEach(System.out::println);
    }
}
