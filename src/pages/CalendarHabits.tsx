import { useQuery } from "@apollo/client/react";
import { GET_LAST_FIVE_DATES } from "../querys/querys"
import { LoginAuth } from "../store/LoginStore";

type GetLastDatesResponse = {
    HabitLogs: {
        date: Date;
    }[];
};

export default function CalendarHabits() {

    const username = LoginAuth((state: any) => state.username)
    const { data } = useQuery<GetLastDatesResponse>(GET_LAST_FIVE_DATES, {
        variables: {
            username: username
        }
    });


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