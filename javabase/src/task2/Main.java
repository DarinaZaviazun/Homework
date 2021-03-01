package task2;

public class Main {
    public static void main(String[] args) {
        Comics ironMan = new Comics("red", 50, "Iron Man");
        Journal playboj = new Journal("Black", 30, "Kak ne popastsja na tom, chto ty ne prav");
        Book rossomaha = new Comics("Yellow", 45, "Rossomaha");
        Book elle = new Journal("Blue", 25, "O vesne i vsem prekrasnom");
        Book book = new Book("Brown", 250);
        Papirus papirus = new Papirus("Orange");
        Papirus book2 = new Book("Red", 350);
        Papirus harpers = new Journal("Pink", 60, "Vse bude dobre dlya kojnogo z nas");
        Papirus akvaman = new Comics("Deep blue", 41, "Akwaman");

        Papirus[] papiruses = {ironMan, playboj, rossomaha, elle, book, book2, papirus, harpers, akvaman};
        Book[] books = {ironMan, playboj, rossomaha, elle, book};
        Comics[] comics = {ironMan, new Comics("red", 25, "Black Widow")};
        Journal[] journals = {playboj, new Journal("White", 25, "Poljubi sebja kak okruzhajushih svoih")};
    }
}
