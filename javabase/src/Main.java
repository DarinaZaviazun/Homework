public class Main {

    public static void main(String[] args) {
        Book[] books = new Book[3];
        books[0] = new Book(345, "Pushkin", "green", true);
        books[1] = new Book(15, "Paramonovna", "red", false);
        books[2] = new Book(100, "Marshak", "yellow", true);
        Librarian masha = new Librarian(45, "Maria Petrovna", false, 13.200);
        Library sunny = new Library("Sunny", 15, "Stalevarov, 115", books, masha);
        System.out.println(sunny);
    }
}
