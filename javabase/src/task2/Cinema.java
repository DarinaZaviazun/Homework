package task2;

import com.sun.source.tree.Tree;
import lombok.*;

import java.util.*;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@AllArgsConstructor
public class Cinema {
    private TreeMap<Days, Scedule> rozklad;
    private Time open;
    private Time close;

    public void addSeances(String day, Seance... seances) { //додає набір сеансів на конкретний день
        Days thisDay = null;
        for (Days days : Days.values()) {
            if (days.toString().equals(day))
                thisDay = days;
        }
        if (thisDay == null) System.out.println("something went wrong!");
        else
            for (Seance seance : seances)
                rozklad.get(thisDay).addSeance(seance);
    }

    public void addSeance(Seance seance, String day) { //додає один сеанс в конкретний день
        Days thisDay = null;
        for (Days days : Days.values()) {
            if (days.toString().equals(day))
                thisDay = days;
        }
        if (thisDay == null) System.out.println("something went wrong!");
        else
            rozklad.get(thisDay).addSeance(seance);
    }

    public void removeMovie(String title) { //повністю видаляє усі сеанси вказаного фільму з розкладу
        for (Map.Entry<Days, Scedule> entry : rozklad.entrySet()) {
            Iterator<Seance> iter = entry.getValue().getSeanceSet().iterator();
            while (iter.hasNext()) {
                if (iter.next().getMovie().getTitle().equals(title)) {
                    iter.remove();
                }
            }
        }
    }

    public void removeSeance(Seance seance, String day) { //видаляє конкретний сеанс фільму в конкретний день
        for (Days day1 : Days.values()) {
            if (day1.toString().equals(day)) {
                rozklad.get(day1).removeSeance(seance);
            }
        }

    }
}
