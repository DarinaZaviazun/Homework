package task2;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Set;
import java.util.TreeSet;

@Getter
@Setter
@EqualsAndHashCode
public class Scedule {
    private Set<Seance> seanceSet;

    public Scedule(TreeSet<Seance> seances) {
        this.seanceSet = seances;
    }

    public void addSeance(Seance seance){
        seanceSet.add(seance);
    }

    public void removeSeance(Seance seance){
        seanceSet.remove(seance);
    }

    @Override
    public String toString() {
        return "Scedule{" +
                "seanceSet=" + seanceSet +
                "} \n";
    }
}
