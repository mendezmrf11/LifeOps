import { useQuery } from "@apollo/client/react";
import { GET_DAILY_HABITS } from "../querys/querys";
import { LoginAuth } from "../store/LoginStore";
import { Checkbox, TextField } from "@mui/material";

type GetLastDatesResponse = {
    HabitLogs: {
        date: Date;
    }[];
};

type TableHabitsProps = {
    onDateSelected: string;
};

export default function TableHabits({ onDateSelected }: TableHabitsProps) {

    const username = LoginAuth((state: any) => state.username)
    const { data } = useQuery<GetLastDatesResponse>(GET_DAILY_HABITS, {
        variables: {
            username: username
        }
    });

    const formattedDate = new Date(onDateSelected).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });

    return (
        <section id="container-table-habits">
            <section id="daily-habits">Today's Habits - {formattedDate}</section>
            <div id="calendar-divider"></div>
            <section id="data-table-habits">
                <section id="mini-data-table-habits">Habits Completed: 4/7</section>
                <section id="mini-data-table-habits">Streak: 5 Days</section>
                <section id="mini-data-table-habits">Completion: 57%</section>
            </section>
            <section id="daily-habits">Daily Habits</section>
            <div id="calendar-divider"></div>
            {data?.HabitLogs && data.HabitLogs.length > 0 ? (
                data?.HabitLogs?.map((habit: any, index: number) => {
                    return (
                        <>
                            <section key={index}>
                                <Checkbox
                                    checked={habit.completed}
                                    slotProps={{
                                        input: { 'aria-label': 'controlled' },
                                    }}
                                />
                                {habit.name}
                                <section>{habit.completed ? "Done" : "Not done"}</section>
                            </section>
                            <section>
                                {habit.name}
                            </section>
                            <section>
                                <TextField id="filled-basic" label="Filled" variant="filled" value={habit.description} />
                            </section>
                        </>
                    )
                })) : (
                <section style={{ opacity: 0.6 }}>
                    No habits yet
                </section>
            )
            }
        </section>
    )
}