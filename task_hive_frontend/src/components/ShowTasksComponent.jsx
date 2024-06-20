export default function ShowTasksComponent() {
    const today = new Date();
    const targetDateFromToday = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay());
    const tasks = [
                    {id: 1, description: "Dentist Appointment", completed: false, targetDate: targetDateFromToday},
                    {id: 2, description: "Play Badminton", completed: false, targetDate: targetDateFromToday},
                    {id: 3, description: "Go to Cubbon Park", completed: false, targetDate: targetDateFromToday}
    ];

    return (
        <div className="container">
            <h1>Your Tasks</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(
                                task => (
                                    <tr key={task.id}>
                                        <td>{task.id}</td>
                                        <td>{task.description}</td>
                                        <td>{task.targetDate.toDateString()}</td>
                                        <td>{task.completed.toString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}