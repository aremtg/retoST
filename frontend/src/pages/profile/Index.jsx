import Box from "../../components/miniComponents/Box";
import UserProfile from "../../components/miniComponents/UserImgName";

import estilos from "./profile.module.css";
import { Button } from "@mui/material";
const Profile = () => {
  const user = "Pepe_123";
  return (
    <Box>
      {/* Perfil de Usuario */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Informacion usuario</h1>
          <div className="flex">
            <button className="my_button shadow-md bg-blue-600 hover:bg-blue-800 text-white font-bold py-1 px-3 rounded-full mr-4">
              Editar
            </button>
            <button className="my_button shadow-md bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-3 rounded-full">
              Eliminar
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <UserProfile
              srcProfileImage="src/img/user_icon.jpg"
              classNameContImg={`${estilos.classNameContImg}`}
              classNameSpan={`${estilos.classNameSpan}`}
            />
          </div>
          <div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              euismod euismod mauris vel feugiat. Nullam facilisis, est vel
              efficitur.
            </p>
            <ul className="mt-4">
              <li className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                {user}@gmail.com
              </li>

              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
                ...........
              </li>
              {/* Agrega más elementos según sea necesario */}
            </ul>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Profile;
