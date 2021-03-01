package task1;

public abstract class Clothes {
    private Sizes size;
    private double price;
    private String color;

    public Clothes(Sizes size, double price, String color) {
        this.size = size;
        this.price = price;
        this.color = color;
    }

    public Sizes getSize() {
        return size;
    }

    public void setSize(Sizes size) {
        this.size = size;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return ", size=" + size +
                ", price=" + price +
                ", color='" + color + "}";
    }
}
