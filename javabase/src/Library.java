import java.util.Arrays;

public class Library {
    private String name;
    private int years;
    private String address;
    private Book[] books;
    private Librarian librarian;

    public Library() {}

    public Library(String name, int years, String address, Book[] books, Librarian librarian) {
        this.name = name;
        this.years = years;
        this.address = address;
        this.books = books;
        this.librarian = librarian;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getYears() {
        return years;
    }

    public void setYears(int years) {
        this.years = years;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Book[] getBooks() {
        return books;
    }

    public void setBooks(Book[] books) {
        this.books = books;
    }

    public Librarian getLibrarian() {
        return librarian;
    }

    public void setLibrarian(Librarian librarian) {
        this.librarian = librarian;
    }

    @Override
    public String toString() {
        return "Library: " +
                "name = " + name +
                ", open years = " + years +
                ", address = " + address +
                ", \n" + Arrays.toString(books) +
                ", \n librarian = " + librarian;
    }
}
