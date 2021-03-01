package task1;

public enum Sizes {
    XXS(40){
        public void getDescription(){
            System.out.println("this is size XXS(40)");
        }

    },
    XS(42){
        public void getDescription(){
            System.out.println("this is size XS(42)");

        }

    },
    S(44){
        public void getDescription(){
            System.out.println("this is size S(44)");
}

    },
    M(46){
        public void getDescription(){
            System.out.println("this is size M(46)");
}

    },
    L(48){
        public void getDescription(){
            System.out.println("this is size L(48)");
}

    };

    private int eurosize;

    Sizes(int eurosize) {
        this.eurosize = eurosize;
    }


    @Override
    public String toString() {
        return "Sizes{" +
                "eurosize=" + eurosize +
                "} " + super.toString();
    }
}
