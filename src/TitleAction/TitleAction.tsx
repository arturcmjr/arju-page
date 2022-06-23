import { SpeedDial, SpeedDialAction } from "@mui/material";
import "./TitleAction.scss";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import LanguageIcon from "@mui/icons-material/Language";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

export function TitleAction(): JSX.Element {
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      className="speed-dial"
      icon={<LanguageIcon />}
      color="secondary"
    >
      <SpeedDialAction icon={<LanguageIcon />} tooltipTitle="Lego Star" />
      <SpeedDialAction icon={<LanguageIcon />} tooltipTitle="Lego Star" />
    </SpeedDial>
  );
}

export default TitleAction;
