# Il Tuo Coach - Sistema di Gestione Prenotazioni Fitness

Questo progetto nasce dall'esigenza di offrire ai Personal Trainer e ai loro clienti uno strumento diretto e professionale per la gestione degli appuntamenti. Si tratta di una piattaforma Full-Stack che permette di automatizzare la prenotazione delle sessioni di allenamento, eliminando la confusione dei messaggi manuali.

## Cosa fa l'applicazione

L'app è divisa in un'area pubblica per l'accesso e un'area riservata per l'atleta. Una volta effettuato il login, l'utente può:
- Consultare la propria disponibilità e scegliere data e ora per il prossimo allenamento.
- Visualizzare un riepilogo cronologico di tutte le sessioni già prenotate.
- Gestire i propri imprevisti annullando le prenotazioni direttamente dalla dashboard.

## Tecnologie utilizzate

Per lo sviluppo ho scelto uno stack moderno che garantisce velocità e scalabilità:
- Frontend: React.js con un design personalizzato in Dark Mode per un'esperienza utente premium.
- Backend: Node.js ed Express per la gestione delle API e della logica di business.
- Database: MySQL per la persistenza dei dati relativi a utenti e appuntamenti.

## Istruzioni per l'installazione locale

Se vuoi testare il progetto sul tuo computer, segui questi passaggi:

1. Setup del Database:
Avvia MySQL (tramite XAMPP o simili) e crea un database chiamato "gym_db". Assicurati di creare le tabelle per gli utenti e le prenotazioni come definito nel codice del server.

2. Installazione delle dipendenze:
È necessario installare i pacchetti sia per il server che per il client. Apri il terminale e digita:
- Per il server: cd server && npm install
- Per il client: cd client && npm install

3. Avvio:
Una volta installate le dipendenze, avvia il server con "nodemon server.js" e il frontend con "npm start". L'applicazione sarà raggiungibile nel browser all'indirizzo localhost:3000.
