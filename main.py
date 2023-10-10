import os
import subprocess
import signal
from colorama import Fore, Style, init
init()
state = False

def push():
    commit = input("Ingresa un comentario: ")
    os.system(f'git add . && git commit -m "{commit}" && git push origin main')

def pull():
    os.system("git pull")

def start():
    os.chdir(os.path.join(os.path.dirname(os.path.realpath(__file__))))
    subprocess.Popen(["node", "server.js"])
    os.chdir("client")
    subprocess.Popen(["npm", "run", "dev"])
    print(Fore.GREEN + "Cliente iniciado en: http://localhost:5173\n" + Style.RESET_ALL)
    print(Fore.GREEN + "Servidor iniciado en: http://localhost:3000" + Style.RESET_ALL)

def stop():
    os.system('taskkill /f /im node.exe >nul 2>nul')
    print(Fore.RED + "Cliente detenido.\n" + Style.RESET_ALL)
    print(Fore.RED + "Servidor detenido." + Style.RESET_ALL)

def code():
    os.system("code .")

def clear():
    input("Presione ENTER para continuar.")
    os.system("cls" if os.name == "nt" else "clear")


while True:
    print("--------------")
    print("[1] Hacer Push")
    print("[2] Hacer Pull")
    if state == False:
        print("[3] Iniciar Servidor " +Fore.RED+ "(Estado: Offline)" + Style.RESET_ALL)
    else:
        print("[3] Apagar Servidor " +Fore.GREEN+ "(Estado: Online)" + Style.RESET_ALL)
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