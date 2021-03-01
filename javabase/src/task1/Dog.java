package task1;

public class Dog extends Animal{
    private String breed;
    private boolean domestic;

    public Dog(String color, int weight, String breed, boolean domestic) {
        super(color, weight);
        this.breed = breed;
        this.domestic = domestic;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public boolean isDomestic() {
        return domestic;
    }

    public void setDomestic(boolean domestic) {
        this.domestic = domestic;
    }

    @Override
    public String toString() {
        return "Dog{" +
                ", breed='" + breed + '\'' +
                ", domestic=" + domestic +
                "} " + super.toString();
    }
}
