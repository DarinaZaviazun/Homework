package task1;

import java.util.List;
import java.util.Map;
import java.util.Objects;

public class Zoo {
    private Map<Person, List<Pet>> zoopark;

    public Zoo(Map<Person, List<Pet>> zoopark) {
        this.zoopark = zoopark;
    }

    public Map<Person, List<Pet>> getZoopark() {
        return zoopark;
    }

    public void setZoopark(Map<Person, List<Pet>> zoopark) {
        this.zoopark = zoopark;
    }

    @Override
    public String toString() {
        return "Zoo{" +
                "zoopark=" + zoopark +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Zoo zoo = (Zoo) o;
        return Objects.equals(zoopark, zoo.zoopark);
    }

    @Override
    public int hashCode() {
        return Objects.hash(zoopark);
    }
}
