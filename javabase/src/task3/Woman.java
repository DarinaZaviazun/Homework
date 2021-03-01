package task3;

public class Woman extends Human implements WomanClothes{
    boolean sex;

    public Woman(int age, String name) {
        super(age, name);
        this.sex = true;
    }

    public boolean isSex() {
        return sex;
    }

    @Override
    public void wearWoman() {
        System.out.println(name + " odeta");
    }
    @Override
    public String toString() {
        return "Woman{" +
                "sex=" + sex +
                "} " + super.toString();
    }

}
