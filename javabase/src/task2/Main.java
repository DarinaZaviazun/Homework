package task2;

public class Main {
    public static void main(String[] args) {
        Playable[] orcestra = {
                new Drumm(50),
                new Trumpet(25),
                new Drumm(60),
                new Guitar(7),
                new Trumpet(15)
        };

        for (Playable instrument : orcestra)
            instrument.play();
    }
}
