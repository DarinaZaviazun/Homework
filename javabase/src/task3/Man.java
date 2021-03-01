package task3;

public class Man extends Human implements ManClothes{
    boolean sex;

    public Man(int age, String name) {
        super(age, name);
        this.sex = false;
    }

    public boolean isSex() {
        return sex;
    }

    @Override
    public void wearMan() {
        System.out.println(name + " odet");
    }
    @Override
    public String toString() {
        return "Man{" +
                "sex=" + sex +
                "} " + super.toString();
    }

}
