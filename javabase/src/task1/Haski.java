package task1;

public class Haski extends Dog {
    private int loudness;

    public Haski(String color, int weight, String breed, boolean domestic, int loudness) {
        super(color, weight, breed, domestic);
        this.loudness = loudness;
    }

    public int getLoudness() {
        return loudness;
    }

    public void setLoudness(int loudness) {
        this.loudness = loudness;
    }

    @Override
    public String toString() {
        return "Haski{" +
                "loudness=" + loudness +
                "} " + super.toString();
    }
}
