package task1;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Dress dress1 = new Dress(Sizes.L, 200.90, "Yellow");
        Dress dress2 = new Dress(Sizes.M, 350.20, "Red");
        TShirt tShirt1 = new TShirt(Sizes.S, 200.55, "White");
        TShirt tShirt2 = new TShirt(Sizes.XS, 500.20, "Black");
        Pants pants1 = new Pants(Sizes.M, 200.40, "Brown");
        Pants pants2 = new Pants(Sizes.XXS, 600.80, "Blue");
        Tie tie1 = new Tie(Sizes.M, 240.0, "Black");
        Tie tie2 = new Tie(Sizes.L, 410.35, "Green");

        Clothes[] clothes = {dress1, dress2, tShirt1, tShirt2, pants1, pants2, tie1, tie2};

        Atelier atelier = new Atelier(clothes);

        ArrayList<Clothes> womans = atelier.womansChoice();
        System.out.println(womans.toString());
        ArrayList<Clothes> mans = atelier.mansChoice();
        System.out.println(mans.toString());
    }
}
