import os
import subprocess
from colorama import Fore, Style, init

init()
server_process = None  
client_process = None 
FOLDER = os.path.dirname(os.path.abspath(__file__))
state = False

def push():
    commit = input("Ingresa un comentario: ")
    os.system(f'git add . && git commit -m "{commit}" && git push origin main')

def pull():
    os.system("git pull")

def start():
    os.chdir(FOLDER)
    server_process = subprocess.Popen(["node", "server.js"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    os.chdir("frontend")
    client_process = subprocess.Popen(["npm", "run", "dev"], shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(Fore.GREEN + "Cliente iniciado en: http://localhost:5173\n" + Style.RESET_ALL)
    print(Fore.GREEN + "Servidor iniciado en: http://localhost:3000" + Style.RESET_ALL)
    return server_process, client_process

def stop():
    os.system("taskkill /F /IM node.exe > NUL 2>&1")
    print(Fore.RED + "Cliente detenido.\n" + Style.RESET_ALL)
    print(Fore.RED + "Servidor detenido." + Style.RESET_ALL)


def code():
    os.system("code .")

def clear():
    input("Presione ENTER para continuar.")
    os.system("cls" if os.name == "nt" else "clear")

def main_menu():
    global state  # Declarar state como global
    while True:
        print("--------------")
        print("[1] Hacer Push")
        print("[2] Hacer Pull")
        if state == False:
            print("[3] Iniciar Servidor " +Fore.RED+ "(Estado: Offline)" + Style.RESET_ALL)
        else:
            print("[3] Apagar Servidor " +Fore.GREEN+ "(Estado: Online)\n" + Style.RESET_ALL)
            print(Fore.GREEN + "Cliente iniciado en: http://localhost:5173" + Style.RESET_ALL)
            print(Fore.GREEN + "Servidor iniciado en: http://localhost:3000\n" + Style.RESET_ALL)
        print("[4] Abrir entorno vsCode")
        print("\n[9] Salir")
        print("--------------")
        option = input("Selecciona una opción: ")

        if option == "1":
            print("Ejecutando.\n")
            push()
            clear()
        elif option == "2":
            print("Ejecutando.\n")
            pull()
            clear()
        elif option == "3":
            print("Ejecutando.\n")
            if state == False:
                start()
                state = True
                clear()
            else:
                stop()
                state = False
                clear()
        elif option == "4":
            print("Ejecutando.\n")
            code()
            clear()
        elif option =="9":
            break
        else:
            print("Ingresa una opción válida.")
            clear()

main_menu()
