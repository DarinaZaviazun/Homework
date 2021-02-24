public class Cinderella extends Human{
    private int razmer;

    public Cinderella(String name, int age, int razmer) {
        super(name, age);
        this.razmer = razmer;
    }

    public int getRazmer() {
        return razmer;
    }

    public void setRazmer(int razmer) {
        this.razmer = razmer;
    }

    @Override
    public String toString() {
        return "Find the one! Your Cinderella - " +
                this.getName() +
                ", razmer nogi: " + razmer +
                ", age: " + age;
    }
}
