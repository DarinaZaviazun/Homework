package task1;

public class Cat extends Animal{
    private String breed;
    private int lengthOfFur;

    public Cat(String color, int weight, String breed, int lengthOfFur) {
        super(color, weight);
        this.breed = breed;
        this.lengthOfFur = lengthOfFur;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public int getLengthOfFur() {
        return lengthOfFur;
    }

    public void setLengthOfFur(int lengthOfFur) {
        this.lengthOfFur = lengthOfFur;
    }

    @Override
    public String toString() {
        return "Cat{" +
                "breed='" + breed + '\'' +
                ", lengthOfFur=" + lengthOfFur +
                "} " + super.toString();
    }
}
