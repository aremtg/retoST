
import Box from "../../components/miniComponents/Box";
import UserProfile from "../../components/miniComponents/UserImgName";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import estilos from './profile.module.css'
const Profile = () => {
  const user = 'Pepe_123'
    return (
      <Box>
          <UserProfile
            useruser={user}
            srcProfileImage="src/img/user_icon.jpg"
            classNameBoxUser={estilos.boxUser}
            classNameContImg={estilos.contImg}
          />
          <Card className={`${estilos.cardContent} shadow-md`}>
            <CardContent >
              <Typography variant="h5" component="div">
                {user}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Correo Electrónico: {user}@example.com
              </Typography>
            </CardContent>
          </Card>
        <br />
          <h1>Un titulo para algo</h1>
      </Box>
    );
  }
  
  export default Profile;
  