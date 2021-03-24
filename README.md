# Skeleton MKDocs

- [Skeleton MKDocs](#skeleton-mkdocs)
  - [Overview](#overview)
  - [Preparare l'ambiente di sviluppo](#preparare-lambiente-di-sviluppo)
    - [Preparare l'ambiende di sviluppo con Docker](#preparare-lambiende-di-sviluppo-con-docker)
    - [Avviare MkDocs con Docker Compose](#avviare-mkdocs-con-docker-compose)
  - [Usare Visual Studio Code come editor](#usare-visual-studio-code-come-editor)
    - [Funzionalità](#funzionalità)
    - [Plugin](#plugin)

## Overview

Documentazione sperimentale scritta utilizzando [MkDocs](https://www.mkdocs.org/).

L'Obbiettivo è riuscire a creare una documentazione facile da mantenere, scritta
da sviluppatori, che descrive un progetto e le sue funzionalità.

## Preparare l'ambiente di sviluppo

Creare documentazione con Mkdocs **è molto semplice**. Iniziamo con il preparare
l'ambiente di sviluppo e una piccola introduzione a [Markdown](https://daringfireball.net/projects/markdown/).

E' possibile lavorare alla documentazione in 2 modi:

- Configurare Docker per usere MkDocs e generare una documentazione visibile da Browser. **Consigliato**.
- Utilizzare [Visual Studio Code](https://code.visualstudio.com/) per vedere l'anteprima della documentazione.

### Preparare l'ambiende di sviluppo con Docker

Per iniziare a lavorare alla documentazione **non è necessario** installare Python
e altre dipendenze.

E' possibile lanciare il progetto utilizzando [Docker](https://www.docker.com/).

Dopo aver scaricato Docker e averlo installato bisogna accertarsi che sia stato
installato correttamente. Per farlo basta aprire il **terminale** o la **PowerShell** e
lanciare il comando `docker --version`. Al momento la guida è stata scritta utilizzando
`Docker version 19.03.13, build 4484c46d9d` ma una versione successiva *dovrebbe*
essere compatibile.

Controllare che assieme a Docker sia stato installato [Docker Compose](https://docs.docker.com/compose/).
Solitamente il programma è incluso nel pacchetto d'installazione di Docker ma vale
la pena verificare con il comando `docker-compose --version`.

### Avviare MkDocs con Docker Compose

Per avviare il Mkdocs e iniziare a scrivere documentazione basta aprire il terminale
nella cartella principalle della documentazione e scrivere il comando
`docker-compose up`.

In automatico Docker crea un'ambiente **preconfigurato** e lancia **mkdocs** in
modalità server. Se l'esecuzione di docker-compose è avvenuta con successo
bisognerebbe poter vedere nel terminale delle scritte simili a queste:

```txt
mkdocs_1  | INFO    -  Building documentation...
mkdocs_1  | WARNING -  Config value: 'dev_addr'. Warning: The use of the IP address '0.0.0.0' suggests a production environment or the use of a proxy to connect to the MkDocs server. However, the MkDocs' server is intended for local development purposes only. Please use a third party production-ready server instead.
mkdocs_1  | INFO    -  Cleaning site directory
mkdocs_1  | INFO    -  Documentation built in 0.69 seconds
mkdocs_1  | [I 210306 10:00:32 server:335] Serving on http://0.0.0.0:8000
mkdocs_1  | INFO    -  Serving on http://0.0.0.0:8000
mkdocs_1  | [I 210306 10:00:32 handlers:62] Start watching changes
mkdocs_1  | INFO    -  Start watching changes
mkdocs_1  | [I 210306 10:00:32 handlers:64] Start detecting changes
mkdocs_1  | INFO    -  Start detecting changes
```

Ora è possibile leggere la documentazione direttamente dal browser aprendo una
pagina all'indirizo [http://localhost:8000](http://localhost:8000).

E' possibile modificare i file Markdown presenti nella cartella docs e in automatico
vedere le modifiche direttamente nel browser.

## Usare Visual Studio Code come editor

**Non è obbligatorio** usare VSCode per scrivere e visualizzare i file in Markdown.
E' possibile farlo direttamente con [Notepad++](https://notepad-plus-plus.org/)
siccome la documentazione consiste in semplici documenti testuali.

VSCode è consigliato perché ha funzionalità molto interessanti che permettono
di vedere un'anteprima della documentazione generata e mette a disposizione una
serie di plugin che facilitano il mantenimento della documentazione.

### Funzionalità

La funzionalità migliore è `Markdown: Open Preview`. Permette di aprire una finestra
che mostra un'anteprima della documentazione.

### Plugin

In assoluto il plugin più utilizzato a supporto del Markdown è
[Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one).

Le funzionalità più usate sono:

- Creazione e aggiornamento automatico di indici. (`Markdown All in One: Create table of contents`).
- Formattazione di tabelle.
- Facilitazione nell'utilizzo di elenchi puntati.