FROM node:14

#Cette ligne définit le répertoire de travail dans le conteneur.
# Toutes les commandes qui suivent seront exécutées à partir de ce répertoire.

WORKDIR /usr/src/app


#Cette ligne copie tous les fichiers du répertoire courant  dans le répertoire de travail du conteneur.
# Cela inclut tous les fichiers de code, les fichiers de configuration, etc

COPY . .

RUN npm install


#Cette ligne expose le port 3000 du conteneur à l'extérieur du conteneur.
EXPOSE 3000

CMD ["node", "index.js"]
