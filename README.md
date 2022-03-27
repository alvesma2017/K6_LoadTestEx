# K6_LoadTestEx
Instalar K6
//Windows
    winget install k6 
//Linux
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
    echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
    sudo apt-get update
    sudo apt-get install k6
Acessar pasta do Projeto
    cd C:\Users\marcelo.alves\Documents\LoadTest_K6
Iniciar npm
    npm init -y
Instalar modulo do k6 dentro da pasta do Projeto
    npm install k6
