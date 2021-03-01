package task1;

public class Sphinx extends Cat{
    private boolean lovable;

    public Sphinx(String color, int weight, String breed, int lengthOfFur, boolean lovable) {
        super(color, weight, breed, lengthOfFur);
        this.lovable = lovable;
    }

    @Override
    public String toString() {
        return "Sphinx{" +
                "lovable=" + lovable +
                "} " + super.toString();
    }
}
