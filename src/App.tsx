import { useEffect } from "react";
import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeOptions } from "./shared/theme/muiTheme";
import { Button } from "@mui/material";
import Navbar from "./Navbar/Navbar";

const theme = createTheme(themeOptions);
var prevScrollpos = window.pageYOffset;

function App() {
  const handleScroll = () => {
    var currentScrollPos = window.pageYOffset;
    const doc = document.getElementById("navbar");
    if (doc) {
      doc.style.top = prevScrollpos > currentScrollPos ? "0" : "-60px";
      prevScrollpos = currentScrollPos;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const primary = theme.palette.primary.main;

  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      <div id="pageWrapper">
        <h1>Bom dia Carlos José magno</h1>
        <p style={{ fontFamily: "Inconsolata", color: primary }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          laboriosam aperiam quos et laudantium consectetur impedit ullam
          architecto atque possimus, at nisi amet expedita officiis eveniet
          animi, accusantium dolorem doloribus nihil corrupti magni tempore
          maiores. Repudiandae iusto necessitatibus, rem placeat, cum iste
          dolore magni sed nemo sit eaque deserunt atque aliquid ratione
          eligendi. Maiores doloribus repellendus aliquam officia inventore
          veniam rem ab voluptatibus asperiores? Accusamus eius dicta asperiores
          id, inventore ea at voluptate adipisci sequi et optio harum corrupti
          iure assumenda in. Dolore deleniti atque aliquid saepe sunt! Delectus
          fugiat quaerat ullam iste dolores et. Dolores corporis, exercitationem
          nesciunt vero velit dicta modi id hic consequatur atque dolorum iure
          quos aut veritatis corrupti voluptatibus ipsum blanditiis assumenda
          repellat eos, accusantium nisi soluta. At perferendis vel dolorum,
          aspernatur consequatur omnis optio quod est eaque libero magnam,
          suscipit fuga beatae! Minima provident atque sint molestias voluptatum
          et sequi dolorem beatae a porro accusantium, quos aliquid maiores
          suscipit sunt nesciunt distinctio est quam eius ullam, vero vel quo
          velit? Possimus ipsa quaerat, itaque, dicta vero, architecto
          perferendis doloribus voluptatem cupiditate quasi esse unde.
          Reiciendis adipisci at laudantium corrupti exercitationem ducimus
          recusandae, itaque unde repellat accusantium, accusamus ab modi eius
          quis facere corporis quod?
        </p>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <div style={{ height: "1500px" }}></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
