import os
import subprocess
from colorama import Fore, Style, init
init()

def push():
    commit = input("Ingresa un comentario: ")
    os.system(f'git add . && git commit -m "{commit}" && git push origin main')

def pull():
    os.system("git pull")

def run():
    os.chdir(os.path.join(os.path.dirname(os.path.realpath(__file__))))
    subprocess.Popen(["node", "server.js"])
    os.chdir("client")
    subprocess.Popen(["npm", "run", "dev"], shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

def code():
    os.system("code .")

def clear():
    os.system("cls" if os.name == "nt" else "clear")

def main_menu():
    while True:
        print("--------------")
        print("[1] Hacer Push")
        print("[2] Hacer Pull")
        print("[3] Iniciar Proyecto")
        print("[4] Abrir entorno vsCode")
        print("\n[9] Salir")
        print("--------------")
        option = input("Selecciona una opción: ")

        if option == "1":
            print("Ejecutando.\n")
            push()
            input("Presione ENTER para continuar.")
            clear()
        elif option == "2":
            print("Ejecutando.\n")
            pull()
            input("Presione ENTER para continuar.")
            clear()
        elif option == "3":
            print("Ejecutando.\n")
            run()
            print(Fore.GREEN + "Cliente iniciado en: http://localhost:5173\n" + Style.RESET_ALL)
            print(Fore.GREEN + "Servidor iniciado en: http://localhost:3000" + Style.RESET_ALL)
            input("Presione ENTER para continuar.")
            clear()
        elif option == "4":
            print("Ejecutando.\n")
            code()
            input("Presione ENTER para continuar.")
            clear()
        elif option =="9":
            break
        else:
            clear()

if __name__ == "__main__":
    main_menu()