package task2;

import lombok.*;

import java.time.Duration;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class Movie {
    private String title;
    private Duration duration;

    @Override
    public String toString() {
        return "\n Movie{" +
                "title='" + title + '\'' +
                ", duration=" + duration.toMinutes() +
                '}';
    }
}
