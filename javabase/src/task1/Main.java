package task1;

public class Main {
    public static void main(String[] args) {
        Sphinx sphinx = new Sphinx("pink", 3, "Sphinx", 0, true);
        Manchkin manchkin = new Manchkin("grey", 4, "Manchkin", 4, 18);
        Haski haski = new Haski("White and grey", 25, "Haski", true, 20);
        Taksa taksa = new Taksa("brown", 15, "Taksa", true, 45);
        Cat cat = new Cat("white", 3, "Noname", 3);
        Dog dog = new Dog("black", 40, "Ovcharka", false);

        Sphinx[] sphinxes = {sphinx, new Sphinx("Beige", 4, "Sphinx", 0, true)};
        Manchkin[] manchkins = {manchkin, new Manchkin("White", 6, "Manchkin", 6, 21)};
        Haski[] haskies = {haski, new Haski("White", 50, "Haski", true, 25)};
        Taksa[] taksas = {taksa, new Taksa("Black", 12, "Taksa", false, 50)};
        Dog[] dogs = {haski, taksa, dog};
        Cat[] cats = {sphinx, manchkin, cat};
        Animal[] animals = {sphinx, manchkin, haski, taksa, cat, dog};
    }
}
