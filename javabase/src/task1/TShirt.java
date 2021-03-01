package task1;

public class TShirt extends Clothes implements WomansClothes, MansClothes{
    private String name;

    public TShirt(Sizes size, double price, String color) {
        super(size, price, color);
        this.name = "TShirt";
    }

    @Override
    public void wearWoman() {
        System.out.println("This woman wears a dress");
    }

    @Override
    public void wearMan() {
        System.out.println("This man wears a dress");
    }

    @Override
    public String toString() {
        return "TShirt{" +
                "name='" + name + super.toString();
    }
}
