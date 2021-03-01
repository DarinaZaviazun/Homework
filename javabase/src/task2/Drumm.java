package task2;

public class Drumm implements Playable{
    int size;

    public Drumm(int size) {
        this.size = size;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    @Override
    public void play() {
        System.out.println(toString());
    }

    @Override
    public String toString() {
        return "Playing: Drumm with characteristics: " +
                "size = " + size + ";";
    }
}
