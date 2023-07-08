import Typography from "@mui/material/Typography";

const MenuText: React.FC<{
  text: string;
}> = ({
  text,
}) => {
    return (
      <Typography
        sx={{
          color: "#D3D3D3",
          fontSize: "17px",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "100 %"
        }}
        component="p"
      >
        {text}
      </Typography >
    );
  }

export default MenuText