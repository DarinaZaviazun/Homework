package task2;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Seance implements Comparable<Seance>{
    private Movie movie;
    private Time startTime;
    private Time endTime;

    public Seance(Movie movie, Time startTime) {
        this.movie = movie;
        this.startTime = startTime;
        int minutes = (int) (startTime.getMin() + (movie.getDuration().toMinutes() % 60));
        int hours;
        if (minutes >= 60){
            hours = (int) (startTime.getHour() + movie.getDuration().toHours()) + 1;
            if (hours > 23)
                hours -= 24;
            minutes -= 60;
        }
        else
            hours = (int) (startTime.getHour() + movie.getDuration().toHours());

        this.endTime = new Time(hours, minutes);
    }

    @Override
    public int compareTo(Seance o) {
        return this.startTime.getHour() - o.startTime.getHour();
    }
}
