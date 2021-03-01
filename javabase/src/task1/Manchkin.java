package task1;

public class Manchkin extends Cat{
    private int height;

    public Manchkin(String color, int weight, String breed, int lengthOfFur, int height) {
        super(color, weight, breed, lengthOfFur);
        this.height = height;
    }

    @Override
    public String toString() {
        return "Manchkin{" +
                "height=" + height +
                "} " + super.toString();
    }
}
