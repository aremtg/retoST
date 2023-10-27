import Box from "../../components/miniComponents/Box";
import UserProfile from "../../components/miniComponents/UserImgName";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import estilos from "./profile.module.css";
import { Button } from "@mui/material";
const Profile = () => {
  const user = "Pepe_123";
  return (
    <Box>
      {/* Perfil de Usuario */}
      <div className=" w-7/12 bottom-2 flex gap-2 justify-between bg-white p-6 rounded-lg shadow-md">
        <UserProfile
          srcProfileImage="src/img/user_icon.jpg"
          classNameContImg={`${estilos.classNameContImg}`}
          classNameSpan={`${estilos.classNameSpan}`}
        />
        {/* Información del Usuario */}
        <Card className="bg-white rounded-lg shadow-md">
          <CardContent className="p-6">
            <Typography variant="h5" className="text-xl font-bold mb-2">
              {user}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Correo Electrónico: {user}@example.com
            </Typography>
          </CardContent>
        </Card>
      </div>

      {/* Sección Adicional */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Un título</h1>
          <Button variant="contained" color="primary">
            Acción
          </Button>
        </div>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          euismod euismod mauris vel feugiat. Nullam facilisis, est vel
          efficitur.
        </p>
      </div>
    </Box>
  );
};

export default Profile;
