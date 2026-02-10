import { useState } from "react";
import CalendarHabits from "./CalendarHabits";
import { TopBar } from "./TopBar";
import TableHabits from "./TableHabits";

export default function DashboardHabits() {

    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    return (
        <>
            <div id="cointainer">
                <main>
                    <section id="container-dashboard-habits">
                        <TopBar></TopBar>
                        <section id="dashboard-content">
                            <CalendarHabits onDateSelected={setSelectedDate}></CalendarHabits>
                            <TableHabits onDateSelected={selectedDate || ""}></TableHabits>
                        </section>
                    </section>
                </main>
            </div>
        </>
    )
}