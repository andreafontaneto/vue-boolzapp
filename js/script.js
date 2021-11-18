/*

Boolzapp - a (not very) innovative messaging platform

** Milestone 1 **
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

** Milestone 2 **
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

** Milestone 3 **
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

** Milestone 4 **
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

*/

const app = new Vue({

  el: '#app',

  data:{

    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'received'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ],
    activeContact: 0, // sarà l'indice del contatto attivo
    emptyTextMessage: '', // sarà il testo del mio messaggio inviato
    searchContactName: '' // sarà il testo nell'input di ricerca contatto
    
  },
  
  methods: {

    //mostro la chat dell'utente attivo
    showMsg(index){
      //console.log('mostra messaggi del contatto ad indice', index);
      this.activeContact = index;
    },

    // mostro l'anteprima dell'ultimo messaggio inviato
    getLastMessage(index){
      
      let lastMessage = this.contacts[index].messages[this.contacts[index].messages.length - 1].message;

      if(lastMessage.length > 25){
        lastMessage = lastMessage.slice(0, 25) + '...';
      };

      return lastMessage;
      //return 'ultimo messaggio';
    },

    // invio un nuovo messaggio
    addNewMessage(){

      //console.log('messaggio aggiunto');
      //console.log(this.contacts[this.activeContact]);

      // pusho un nuovo oggetto "message" nell'array "messages"
      this.contacts[this.activeContact].messages.push(
        {
          // come data richiama le MIE 2 funzioni "getDate" e "getHour"
          date: this.getDate() + ' ' + this.getHour(), 
          // come testo ha la mia stringa vuota
          message: this.emptyTextMessage,
          // come status è inviato 
          status: 'sent'
        }
      );

      // resetto stringa collegata all'input
      this.emptyTextMessage = '';

      // dopo 1 secondo ricevo il messaggio di risposta
      setTimeout(() => {

        // pusho un altro nuovo oggetto "message" nell'array "messages" (guarda sopra)
        this.contacts[this.activeContact].messages.push(
          {
            date: this.getDate() + ' ' + this.getHour(),
            message: 'va bene :)',
            status: 'received'
          }
        );


      }, 1000)
    },

    // ricerco il contatto giusto
    findContact(){

      /*this.contacts.forEach(function (contact) {
      });

      this.contacts.forEach((contact) => {
      });*/

      // ciclo ogni contatto in contatti
      for(contact of this.contacts){ 

        // guardo se la mia stringa è inclusa nella proprietà "name" dell'oggetto "contact"
        // trasformo il risultato in lowercase
        // salvo il risultato (true/false) in una costante
        const filteredContact = contact.name.toLowerCase().includes(this.searchContactName.toLowerCase());
        
        console.log(contact.name);
        console.log(filteredContact);

        // controllo di validità
        if(filteredContact === false){
          contact.visible = false;
        } else {
          contact.visible = true;
        }
      };
      
    },

    // recupero la data attuale
    getDate(){
      const d = new Date();
      let time = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
      return time;
    },

    // recupero il giorno attuale
    getHour(){
      const d = new Date();
      let time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      return time;
    },





  }


})