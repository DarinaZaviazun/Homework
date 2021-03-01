package task1;

public class Taksa extends Dog{
    private int length;

    public Taksa(String color, int weight, String breed, boolean domestic, int length) {
        super(color, weight, breed, domestic);
        this.length = length;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    @Override
    public String toString() {
        return "Taksa{" +
                "length=" + length +
                "} " + super.toString();
    }
}
