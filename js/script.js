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

  data:[

    contacts: [

      {
        name: 'Michele',
        avatar: 'img/avatar_1.jpg',
        visible: true,
        messages: [

          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          },

        ]
      },
      {
        name: 'Fabio',
        avatar: 'img/avatar_1.jpg',
        visible: true,
        messages: [

          {
            date: '10/01/2020 15:30:55',
            text: 'Vuoi venire al cinema dopo?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Siamo in tre',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Mi piacerebbe ma devo andare a fare la spesa',
            status: 'received'
          },

        ]
      },
      {
        name: 'Samuele',
        avatar: 'img/avatar_1.jpg',
        visible: true,
        messages: [

          {
            date: '10/01/2020 15:30:55',
            text: 'Ti ho mandato la foto giusta',
            status: 'received'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Mi sa che hai sbagliato chat',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          },

        ]
      },
      {
        name: 'Luisa',
        avatar: 'img/avatar_1.jpg',
        visible: true,
        messages: [

          {
            date: '10/01/2020 15:30:55',
            text: 'Ho avuto in idea',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Stasera sushi?',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Sì e dopo cinema',
            status: 'received'
          },

        ]
      },

    ]

  ]




})