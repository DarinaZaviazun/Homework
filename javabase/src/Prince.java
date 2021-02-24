public class Prince extends Human{
    private int shoe;

    public Prince(String name, int age, int shoe) {
        super(name, age);
        this.shoe = shoe;
    }

    public String findTheOne(Cinderella[] allGirls){
        for(Cinderella cindy : allGirls) {
            if (cindy.getRazmer() == this.shoe)
                return cindy.toString();
        }
        return "Ne najdeno zolushku po vashemu zaprosu";
    }
}
