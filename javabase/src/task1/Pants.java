package task1;

public class Pants extends Clothes implements WomansClothes, MansClothes{
    private String name;

    public Pants(Sizes size, double price, String color) {
        super(size, price, color);
        this.name = "Pants";
    }

    @Override
    public void wearWoman() {
        System.out.println("This woman wears a pants");
    }

    @Override
    public void wearMan() {
        System.out.println("This man wears a dress");
    }

    @Override
    public String toString() {
        return "Pants{" +
                "name='" + name + super.toString();
    }
}
