public class Main {
    public static void main(String[] args) {
        Prince alex = new Prince("Alex", 25, 38);
        Prince max = new Prince("Max", 56, 41);

        Cinderella anna = new Cinderella("Anna", 25, 36);
        Cinderella alla = new Cinderella("Alla", 30, 37);
        Cinderella sveta = new Cinderella("Sveta", 35, 38);
        Cinderella katerina = new Cinderella("Katerina", 15, 39);
        Cinderella lena = new Cinderella("Lena", 29, 40);
        Cinderella ida = new Cinderella("Ida", 21, 41);
        Cinderella[] vseVmeste = new Cinderella[]{anna, alla, sveta, katerina, lena, ida};

        String forAlex = alex.findTheOne(vseVmeste);
        System.out.println(forAlex);

        String forMax = max.findTheOne(vseVmeste);
        System.out.println(forMax);
    }
}
