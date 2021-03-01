package task2;

public class Papirus {
    private String color;

    public Papirus() {
    }

    public Papirus(String color) {
        this.color = color;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return "Papirus{" +
                "color='" + color + '\'' +
                '}';
    }
}
