package task1;

public class Dress extends Clothes implements WomansClothes{
    private String name;

    public Dress(Sizes size, double price, String color) {
        super(size, price, color);
        this.name = "Dress";
    }

    @Override
    public void wearWoman() {
        System.out.println("This woman wears a dress");
    }

    @Override
    public String toString() {
        return "Dress{" +
                "name=" + name + super.toString();
    }
}
