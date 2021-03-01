package task1;

public class Tie extends Clothes implements MansClothes{
    private String name;

    public Tie(Sizes size, double price, String color) {
        super(size, price, color);
        this.name = "Tie";

    }

    @Override
    public void wearMan() {
        System.out.println("This man wears a dress");
    }

    @Override
    public String toString() {
        return "Tie{" +
                "name='" + name + super.toString();
    }
}
