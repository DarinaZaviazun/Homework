package task1;

public class Book implements Printable{
    private String name;

    public Book(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public void print() {
        System.out.println("this book has been printed");
    }

    public static void printBooks(Printable[] printable){
        for (Printable printed : printable){
            if (printed instanceof Book) System.out.println(((Book) printed).getName());
        }
    }

    @Override
    public String toString() {
        return "Book{" +
                "name='" + name + '\'' +
                '}';
    }
}
