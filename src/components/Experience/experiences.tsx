// import WorkIcon from "@mui/icons-material/Work";
// import SchoolIcon from "@mui/icons-material/School";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export interface IExperience {
  company: string;
  title: string;
  dateRange: string;
  icon: JSX.Element;
  content: JSX.Element;
}

export const experiences: IExperience[] = [
  {
    company: "Round Stars",
    title: "Game Developer",
    dateRange: "2017 - 2018",
    icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    content: (
      <>
        <p>
          Worked on developing single-player and multiplayer board games. Coding
          core mechanism, search algorithms and bots AIs. I've also designed
          interface for those games.
        </p>
        <p>
          Working with Unity and C#. There was also my first contact with a REST
          API which I helped develop in PHP.
        </p>
      </>
    ),
  },
  {
    company: "ADRA Brasil",
    title: "Designer",
    dateRange: "2018 - 2020",
    icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    content: (
      <>
        <p>
          Created art for fundraising campaigns for crises, design reports, and
          presentation slides with Photoshop, Illustrator and other design
          software.
        </p>
        <p>
          There, I had the opportunity to develop a system to help to control
          the hot meals given to Venezuelan refugees. It was made with Laravel +
          Vue.
        </p>
      </>
    ),
  },
  {
    company: "Adven.Tech",
    title: "Full Stack Web Developer",
    dateRange: "2020 - 2022",
    icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    content: (
      <>
        <p>
          Worked developing web apps as a stock management, event, e-commerce
          and other systems on client demand. I also helped to migrate legacy
          systems to modern technologies.
        </p>
        <p>
          Written clean and scalable code for the back and front end. Worked
          with popular technologies such as Angular, React, .NET, C#, Azure and
          others.
        </p>
      </>
    ),
  },
  {
    company: "IESB",
    title: "Graduation on Game Development",
    dateRange: "2016 - 2018",
    icon: <SchoolOutlinedIcon fontSize="small" />,
    content: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit qui
        earum pariatur aperiam quod dolor! Aliquam recusandae repellendus
        architecto. Pariatur ipsa voluptatem quos dolores maxime nobis cum
        doloremque. Pariatur quasi sequi qui praesentium aut dignissimos?
      </p>
    ),
  },
  {
    company: "Descomplica",
    title:
      "post graduation on system analysis and development / mobile development",
    dateRange: "2021 - 2022",
    icon: <SchoolOutlinedIcon fontSize="small" />,
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse eos
        pariatur repellendus? Rerum cum dolor nulla minima labore minus officia,
        sed autem vitae quibusdam iure fugit illo non doloremque asperiores vero
        ad quas esse reprehenderit impedit deserunt tenetur quisquam.
      </p>
    ),
  },
  {
    company: "Arkads Games",
    title: "Game developer",
    dateRange: "2017 - Present",
    icon: <FavoriteBorderOutlinedIcon fontSize="small" />,
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure omnis
        delectus magni libero iusto non doloremque ullam, ipsa mollitia
        perspiciatis deserunt nulla, corrupti ex quae molestiae vitae
        laboriosam. Quasi quibusdam aspernatur blanditiis architecto voluptatum
        amet tempora nulla iure nam reprehenderit tenetur non, maxime nihil
        facilis aliquid nemo id. Praesentium animi aspernatur odio ex. Facilis
        officiis facere optio soluta placeat beatae.
      </p>
    ),
  },
];

export default experiences;
