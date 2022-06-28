// import WorkIcon from "@mui/icons-material/Work";
// import SchoolIcon from "@mui/icons-material/School";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

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
    title: "Game developer",
    dateRange: "2017 - 2018",
    icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        cumque officiis dicta eveniet aperiam distinctio minus iure totam,
        dolore labore, expedita magnam quia cum soluta quidem voluptatibus
        voluptas at dolor exercitationem a aut perferendis aspernatur
        dignissimos? Laborum, laudantium perspiciatis similique, dolores aut, in
        eligendi at distinctio fuga dolorem consequatur sapiente.
      </p>
    ),
  },
  {
    company: "ADRA Brasil",
    title: "Designer",
    dateRange: "2018 - 2020",
    icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio soluta
        officia at delectus ducimus deserunt distinctio totam, dignissimos neque
        ipsa dolores illo placeat aut quibusdam nulla, commodi vel? Possimus
        aperiam excepturi consectetur enim beatae? Voluptates ab aut voluptatum
        quod minima?
      </p>
    ),
  },
  {
    company: "Adven.tech",
    title: "Full stack developer",
    dateRange: "2020 - Present",
    icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    content: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo eius
        accusantium, officiis corporis voluptates voluptatem ab distinctio vitae
        nesciunt id molestias deserunt suscipit excepturi dolore impedit
        dolorem. Deleniti ullam qui quibusdam modi eveniet, perspiciatis
        incidunt a quam delectus fuga minima! Facilis cum a id, ullam voluptates
        minima molestiae dolore necessitatibus ducimus? Voluptatum laudantium
        qui architecto harum nesciunt quas autem non.
      </p>
    ),
  },
  {
    company: "IESB",
    title: "Graduation on game development",
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
    dateRange: "2021 - Present",
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
