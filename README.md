## SL4V_D3FEND

![Sl4v_D3fend — Mozilla Firefox 2024-08-22 12-17-48](https://github.com/user-attachments/assets/43f3625b-2858-45b4-9eb6-d702f2302703)

### Описание
Русифицированная версия матрицы MITRE D3FEND. 
На данный момент из себя представляет набор переведённых техник защиты и не включает в себя весь функционал MITRE D3FEND, такой как просмотр артефактов или же связанные TTP из MITRE AT4CK. Это в дальнейшем будет исправлено и проект не будет оставлен в том виде, в котором он есть сейчас, а будет дорабатываться.

### Установка с использованием Docker
```
git clone https://github.com/4rchiDm/sl4v-d3fend.git
cd sl4v-d3fend
docker build -t sl4v-d3fend .
docker run -d -p 3000:3000 sl4v-d3fend
```
### Установка без Docker
```
git clone https://github.com/4rchiDm/sl4v-d3fend.git
cd sl4v-d3fend
npm install
node app.js
```
