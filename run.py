import os

def push():
    os.system("git push origin main")

def pull():
    os.system("git pull")

def start():
    os.chdir("backend")
    os.system("start cmd /k nodemon app.js")
    os.chdir("..")  
    os.chdir("frontend")
    os.system("start cmd /k npm run dev")
    os.chdir("..")  

def code():
    os.system("code .")

def clear():
    os.system("cls" if os.name == "nt" else "clear")

def menu():
    while True:
        print("--------------")
        print("[1] Hacer Push")
        print("[2] Hacer Pull")
        print("[3] Abrir entorno vsCode")
        print("\n[9] Salir")
        print("--------------")
        option = input("Selecciona una opción: ")

        if option == "1":
            push()
        elif option == "2":
            pull()
        elif option == "3":
            code()
        elif option =="9":
            break
        else:
            print("Ingresa una opción válida.")
        
        input("Presione ENTER para continuar.")
        clear()

start()
menu()
