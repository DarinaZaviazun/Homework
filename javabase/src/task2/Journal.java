package task2;

public class Journal extends Book{
    private String article;

    public Journal(String color, int pages, String article) {
        super(color, pages);
        this.article = article;
    }

    public String getArticle() {
        return article;
    }

    public void setArticle(String article) {
        this.article = article;
    }

    @Override
    public String toString() {
        return "Journal{" +
                "article='" + article + '\'' +
                "} " + super.toString();
    }
}
