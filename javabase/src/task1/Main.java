package task1;

public class Main {
    public static void main(String[] args) {
        Printable[] printable = {
                new Book("Evgenij Onegin"),
                new Magazine("Elle"),
                new Magazine("Playboj"),
                new Book("Mertvie dushi")
        };

        for (Printable printed : printable){
            printed.print();
        }

        System.out.println("-----");
        Magazine.printMagazines(printable);

        System.out.println("-----");
        Book.printBooks(printable);
    }
}
