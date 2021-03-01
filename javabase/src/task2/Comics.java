package task2;

public class Comics extends Book{
    private String superHero;

    public Comics(String color, int pages, String superHero) {
        super(color, pages);
        this.superHero = superHero;
    }

    public String getSuperHero() {
        return superHero;
    }

    public void setSuperHero(String superHero) {
        this.superHero = superHero;
    }

    @Override
    public String toString() {
        return "Comics{" +
                "superHero='" + superHero + '\'' +
                "} " + super.toString();
    }
}
