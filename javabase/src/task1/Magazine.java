package task1;

public class Magazine implements Printable{
    private String name;

    public Magazine(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public void print() {
        System.out.println("this magazine has been printed");
    }

    public static void printMagazines(Printable[] printable){
        for (Printable printed : printable){
            if (printed instanceof Magazine) System.out.println(((Magazine) printed).getName());
        }
    }

    @Override
    public String toString() {
        return "Magazine{" +
                "name='" + name + '\'' +
                '}';
    }
}
