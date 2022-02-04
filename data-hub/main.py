import os
import subprocess
import threading

def run_nodejs_server():
    try:
        print('starting nodejs server...')
        print('nodejs server on..')
        subprocess.run(['node', 'server.js'])
    except:
        print('nodejs server failed')


def run_python_server():
    try:
        print('starting python server...')
        print(f'\nPYTHON SERVER LISTENING ON PORT: 8000\n-------------------')
        os.system(f'python3 -m http.server --directory uploads')
    except:
        print('python server failed')

def show_local_machine_ip():
    print(f'\nyour local ip------------------\n')
    os.system('ifconfig wlo1')
    print(f'---------------------------------\n')


thread1 = threading.Thread(target=run_python_server)
thread2 = threading.Thread(target=run_nodejs_server)

thread1.start()
thread2.start()
show_local_machine_ip()

