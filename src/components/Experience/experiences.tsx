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
          Worked on developing single-player and multiplayer board games. Coding core mechanism,
          search algorithms and bots AIs. I've also designed interface for those games.
        </p>
        <p>
          Worked mainly with Unity and C# for game development. There I could also help with the
          creation of an API for a small social media.
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
          Created art for fundraising campaigns for crises, design reports, and presentation slides
          with Photoshop, Illustrator and other design software.
        </p>
        <p>
          There, I had the opportunity to develop a system to help to control the hot meals given to
          Venezuelan refugees.
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
          Worked developing web apps as a stock management, event, e-commerce and other systems on
          client demand. I also helped to migrate legacy systems to modern technologies.
        </p>
        <p>
          Written clean and scalable code for the back and front end. Worked with popular
          technologies such as Angular, React, .NET, C#, SQL and others.
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
      <>
        <p>
          There I learned the concepts of object-oriented programming. I had contact with every
          layer of game development, including audio, 2D and 3D art, programming, level design and
          others. I won a prize for the best game made in the course of the second semester of 2017.
        </p>
        <p>
          Even though the graduation had a heavy focus on game development, I had contact with web
          and app development basics.
        </p>
      </>
    ),
  },
  {
    company: "Descomplica",
    title: "Post Graduation at Two Courses",
    dateRange: "2021 - 2022",
    icon: <SchoolOutlinedIcon fontSize="small" />,
    content: (
      <>
        <p>
          <b>System Analysis and Development</b> focuses mostly on the theoretical part of
          developing a system. There I studied data structure, project management, DevOps and other
          development-related topics.
        </p>
        <p>
          <b>Mobile Development.</b> As the name suggests, we had mobile related classes, like the
          most recent frameworks that have been used for hybrid development as well the basics of
          IOS and Android native apps.
        </p>
      </>
    ),
  },
  {
    company: "Arkads Games",
    title: "Game Developer",
    dateRange: "2017 - Present",
    icon: <FavoriteBorderOutlinedIcon fontSize="small" />,
    content: (
      <p>
        Arkads Games is kind of a pseudonym that I use for my game development hobby. Even though I
        do not develop games as a job nowadays, I still love making them for fun. Despite not having
        time to do it, and not and not making money with them, I still wish to keep doing it as a
        hobby.
      </p>
    ),
  },
];

export default experiences;
