package task2;

import lombok.*;

@NoArgsConstructor
@Getter
@ToString
@EqualsAndHashCode
public class Time {
    private int hour;
    private int min;

    public void setHour(int hour) {
        if (hour >= 0 && hour < 60)
            this.hour = hour;
    }

    public void setMin(int min) {
        if (min >= 0 && min < 60)
            this.min = min;
    }

    public Time(int hour, int min) {
        if ((hour >= 0 && hour < 60) && (min >= 0 && min < 60)) {
            this.hour = hour;
            this.min = min;
        }
        else System.out.println("Wrong time settings!");

    }
}
