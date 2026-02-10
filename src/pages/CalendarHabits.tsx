import { useQuery } from "@apollo/client/react";
import { GET_LAST_FIVE_DATES } from "../querys/querys"
import { LoginAuth } from "../store/LoginStore";
import { useEffect, useState } from "react";
import { Radio } from "@mui/material";

type GetLastDatesResponse = {
    HabitLogs: {
        date: Date;
    }[];
};

type CalendarHabitsProps = {
    onDateSelected: (date: string) => void;
};

export default function CalendarHabits({ onDateSelected }: CalendarHabitsProps) {

    const username = LoginAuth((state: any) => state.username)
    const { data } = useQuery<GetLastDatesResponse>(GET_LAST_FIVE_DATES, {
        variables: {
            username: username
        }
    });

    useEffect(() => {
        if (data) {
            console.log("Query finalizado", data);

            if (data.HabitLogs?.length) {
                setSelectedDate((data.HabitLogs[0].date).toString());
                onDateSelected((data.HabitLogs[0].date).toString()); 
            }
        }
    }, [data]);

    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    return (
        <>
            <section id="calendar-container">
                <span id="title-select-date">Select Date</span>
                {data?.HabitLogs && data.HabitLogs.length > 0 ? (                                                                                                                                                  
                    data.HabitLogs.map((log: any, index: number) => {
                        const formattedDate = new Date(log.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                        });

                        const isFirst = index === 0;

                        return (
                            <section key={index} id="option-calendar"
                                className={`${isFirst ? "first-item" : ""}`}>
                                <Radio
                                    checked={selectedDate === log.date}
                                    onChange={() => setSelectedDate(log.date)}
                                    value={log.date}
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': formattedDate }}
                                />
                                {formattedDate}
                                <div id="calendar-divider"></div>
                            </section>
                        );
                    })
                ) : (
                    <section id="option-calendar" style={{ opacity: 0.6 }}>
                        No dates yet
                    </section>
                )}
                <section id="option-calendar" className="last-item">
                    <button id="button-view-calendar">View Calendar</button>
                </section>
            </section>
        </>
    )
}