const TicketControl = require('../models/ticket-control');

const ticketControl = new TicketControl();



const socketController = (socket) => {

    // Cuando un cliente se conecta
    socket.emit( 'last-ticket', ticketControl.last );
    socket.emit( 'state-actual', ticketControl.last4 );
    socket.emit( 'tickets-pending', ticketControl.tickets.length);
        

    socket.on('next-ticket', ( payload, callback ) => {
        
        const next = ticketControl.siguiente();
        callback( next );
        socket.broadcast.emit( 'tickets-pending', ticketControl.tickets.length);

    });

    socket.on('attend-ticket', ({ desktop }, callback) => {
        
        if ( !desktop ) {
            return callback({
                ok: false,
                msg: 'Its desktop is mandatory'
            });
        }

        const ticket = ticketControl.attendTicket( desktop );

        
        socket.broadcast.emit( 'state-actual', ticketControl.last4 );
        socket.emit( 'tickets-pending', ticketControl.tickets.length);
        socket.broadcast.emit( 'tickets-pending', ticketControl.tickets.length);

        if ( !ticket ) {
            callback({
                ok: false,
                msg: 'There are no more pending tickets'
            });
        } else {
            callback({
                ok: true,
                ticket
            })
        }

    })

}



module.exports = {
    socketController
}

