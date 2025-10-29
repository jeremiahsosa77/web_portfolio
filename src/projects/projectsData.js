import projectone from "../assets/project-1.png";
import projecttwo from "../assets/project-2.png";
import projectthree from "../assets/project-3.png";

const projects = {
    1: {
        title: "Semaphore",
        image: projectone,
        discription: (
            <>
                <p>
                Built a FastAPI microservice for time series weather data and ML forecasts, exposing input/output endpoints with auto docs, and
orchestrating predictions from TensorFlow (.h5) models using a DSPEC driven pipeline.
                </p>
            </>
        ),
        github: "https://github.com/conrad-blucher-institute/semaphore",
        demo: "https://netlify.com",
    },
    2: {
        title: "Flare",
        image: projecttwo,
        discription: (
            <>
                <p>
                Built a responsive Vue 3 dashboard with Highcharts to visualize AI ensemble forecasts (median + 5th/95th ribbon), including
time-zone aware axes, tooltips, and live CSV updates served from the backend (Semaphore)
                </p>
            </>
        ),
        github: "https://github.com/conrad-blucher-institute/Flare",
        demo: "https://netlify.com",
    },
    3: {
        title: "Contact List",
        image: projectthree,
        discription: (
            <>
                <p>
                Developed a dynamic Contact List application using Reactjs, facilitating real-time user interactions.
                Handled data operations such as create, read, update, and delete (CRUD), which upgraded the application's 
                responsiveness and scalability. 
                </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
};

export default projects;