package task1;

import java.util.ArrayList;

public class Atelier {
    private Clothes[] clothes;

    public Atelier(Clothes[] clothes) {
        this.clothes = clothes;
    }

    public Clothes[] getClothes() {
        return this.clothes;
    }

    public void setClothes(Clothes[] clothes) {
        this.clothes = clothes;
    }

    public ArrayList<Clothes> womansChoice(){
        ArrayList<Clothes> womans = new ArrayList<>();
        for (Clothes cloth : this.clothes) {
            if (cloth instanceof WomansClothes) {
                womans.add(cloth);
            }
        }
        return womans;
    }

    public ArrayList<Clothes> mansChoice(){
        ArrayList<Clothes> mans = new ArrayList<>();
        for (Clothes cloth : this.clothes) {
            if (cloth instanceof MansClothes) {
                mans.add(cloth);
            }
        }
        return mans;
    }

}
