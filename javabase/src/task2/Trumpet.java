package task2;

public class Trumpet implements Playable{
    int diametr;

    public Trumpet(int diametr) {
        this.diametr = diametr;
    }

    public int getDiametr() {
        return diametr;
    }

    public void setDiametr(int diametr) {
        this.diametr = diametr;
    }

    @Override
    public void play() {
        System.out.println(toString());
    }

    @Override
    public String toString() {
        return "Playing: Trumpet with characteristics: " +
                "diametr=" + diametr + ";";
    }
}
