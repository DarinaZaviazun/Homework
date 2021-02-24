public class Librarian {
    private int age;
    private String name;
    private boolean glasses;
    private double salary;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isGlasses() {
        return glasses;
    }

    public void setGlasses(boolean glasses) {
        this.glasses = glasses;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public Librarian(){}

    public Librarian(int age, String name, boolean glasses, double salary) {
        this.age = age;
        this.name = name;
        this.glasses = glasses;
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Librarian: " +
                "age = " + age +
                ", name = " + name +
                ", wear glasses = " + glasses +
                ", salary = " + salary;
    }
}
