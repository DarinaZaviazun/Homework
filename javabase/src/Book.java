public class Book {
    private int pages;
    private String author;
    private String color;
    private boolean present;

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public boolean isPresent() {
        return present;
    }

    public void setPresent(boolean present) {
        this.present = present;
    }

    public Book(){}

    public Book(int pages, String author, String color, boolean present) {
        this.pages = pages;
        this.author = author;
        this.color = color;
        this.present = present;
    }

    @Override
    public String toString() {
        return "\n{Book: " +
                "pages = " + pages +
                ", author = " + author +
                ", color = " + color +
                ", present = " + present + "}";
    }
}
