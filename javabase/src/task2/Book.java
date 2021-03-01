package task2;

public class Book extends Papirus{
    private int pages;

    public Book(String color, int pages) {
        super(color);
        this.pages = pages;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    @Override
    public String toString() {
        return "Book{" +
                "pages=" + pages +
                "} " + super.toString();
    }
}
