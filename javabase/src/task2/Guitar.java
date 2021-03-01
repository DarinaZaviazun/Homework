package task2;

public class Guitar implements Playable{
    int numberOfStrings;

    public Guitar(int numberOfStrings) {
        this.numberOfStrings = numberOfStrings;
    }

    public int getNumberOfStrings() {
        return numberOfStrings;
    }

    public void setNumberOfStrings(int numberOfStrings) {
        this.numberOfStrings = numberOfStrings;
    }

    @Override
    public String toString() {
        return "Playing: Guitar with characteristics: " +
                "numberOfStrings=" + numberOfStrings + ";";
    }

    @Override
    public void play() {
        System.out.println(toString());

    }
}
