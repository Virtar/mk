import React, { useState } from 'react';

const MortalKombatTournament = () => {
  const [activeTab, setActiveTab] = useState('torneos');
  
  // Datos de ejemplo para los torneos
  const tournaments = [
    {
      id: 1,
      name: "MORTAL KOMBAT ULTIMATE CHAMPIONSHIP",
      date: "30 de Abril, 2025",
      time: "18:00",
      fee: "$15",
      prize: "$500",
      paymentInfo: "Transferencia a cuenta 1234-5678-9012-3456 antes del 29/04",
      spots: 32,
      spotsLeft: 12
    },
    {
      id: 2,
      name: "KOMBAT LEAGUE SEASON XI",
      date: "15 de Mayo, 2025",
      time: "19:00",
      fee: "$20",
      prize: "$750",
      paymentInfo: "Transferencia a cuenta 1234-5678-9012-3456 antes del 14/05",
      spots: 64,
      spotsLeft: 43
    }
  ];
  
  // Reglas del torneo
  const rules = [
    "Formato de eliminación doble",
    "Cada match al mejor de 3 (Bo3)",
    "Finales al mejor de 5 (Bo5)",
    "Se permiten todos los personajes",
    "Prohibido el uso de glitches o bugs",
    "Los jugadores deben estar presentes 15 minutos antes de su match",
    "El uso de controles propios está permitido",
    "En caso de desconexión, el round se repite"
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header con el logo y título */}
      <header className="bg-gradient-to-r from-red-800 via-black to-red-800 py-6 px-4 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-center md:text-left mb-4 md:mb-0">
            <span className="text-red-600">MORTAL</span> <span className="text-yellow-400">KOMBAT</span>
            <span className="block text-lg md:text-xl mt-1">CHAMPIONSHIP MANAGER</span>
          </h1>
          <div className="flex space-x-2">
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'torneos' ? 'bg-red-700' : 'bg-gray-800 hover:bg-gray-700'}`}
              onClick={() => setActiveTab('torneos')}
            >
              TORNEOS
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'reglas' ? 'bg-red-700' : 'bg-gray-800 hover:bg-gray-700'}`}
              onClick={() => setActiveTab('reglas')}
            >
              REGLAS
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'contacto' ? 'bg-red-700' : 'bg-gray-800 hover:bg-gray-700'}`}
              onClick={() => setActiveTab('contacto')}
            >
              CONTACTO
            </button>
          </div>
        </div>
      </header>
      
      {/* Banner principal */}
      <div className="bg-gradient-to-b from-black to-gray-900 py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¡DEMUESTRA TU <span className="text-red-600">PODER</span> EN LA ARENA!
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Participa en nuestros torneos oficiales de Mortal Kombat y conviértete en el campeón supremo. 
            ¡La gloria te espera!
          </p>
        </div>
      </div>
      
      {/* Contenido principal */}
      <main className="container mx-auto py-8 px-4">
        {/* Sección de Torneos */}
        {activeTab === 'torneos' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">PRÓXIMOS TORNEOS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tournaments.map(tournament => (
                <div key={tournament.id} className="bg-gray-900 rounded-lg overflow-hidden border-2 border-red-800 shadow-lg transform transition hover:scale-105">
                  <div className="bg-gradient-to-r from-red-800 via-black to-red-800 py-3 px-4">
                    <h3 className="text-xl font-bold">{tournament.name}</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Fecha:</span>
                      <span>{tournament.date}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Hora:</span>
                      <span>{tournament.time}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Inscripción:</span>
                      <span className="text-yellow-400">{tournament.fee}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Premio:</span>
                      <span className="text-yellow-400">{tournament.prize}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Plazas:</span>
                      <span>{tournament.spotsLeft} de {tournament.spots} disponibles</span>
                    </div>
                    <div className="mt-4 p-3 bg-gray-800 rounded-md">
                      <h4 className="font-semibold text-yellow-400 mb-1">Información de pago:</h4>
                      <p>{tournament.paymentInfo}</p>
                    </div>
                    <button className="mt-6 w-full bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-md transition">
                      INSCRÍBETE AHORA
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Proceso de inscripción */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">PROCESO DE INSCRIPCIÓN</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-900 p-6 rounded-lg text-center">
                  <div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Reserva tu lugar</h3>
                  <p>Selecciona el torneo en el que deseas participar y haz clic en "Inscríbete ahora"</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg text-center">
                  <div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Realiza el pago</h3>
                  <p>Transfiere el monto de la inscripción a la cuenta bancaria proporcionada antes de la fecha límite</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg text-center">
                  <div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Confirma tu asistencia</h3>
                  <p>Preséntate en el lugar del torneo 30 minutos antes para confirmar tu asistencia</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Sección de Reglas */}
        {activeTab === 'reglas' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">REGLAS DEL TORNEO</h2>
            <div className="bg-gray-900 p-8 rounded-lg">
              <ul className="space-y-4">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-lg">{rule}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-gray-800 rounded-md">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Nota importante:</h3>
                <p>El incumplimiento de cualquiera de estas reglas puede resultar en la descalificación del participante sin derecho a reembolso del monto de inscripción.</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Sección de Contacto */}
        {activeTab === 'contacto' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">CONTACTO</h2>
            <div className="bg-gray-900 p-8 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg mb-6 text-center">
                ¿Tienes alguna pregunta sobre nuestros torneos? ¡No dudes en contactarnos!
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="block mb-1">Nombre</label>
                  <input type="text" className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:border-red-600 focus:outline-none" />
                </div>
                <div>
                  <label className="block mb-1">Email</label>
                  <input type="email" className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:border-red-600 focus:outline-none" />
                </div>
                <div>
                  <label className="block mb-1">Mensaje</label>
                  <textarea rows="4" className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:border-red-600 focus:outline-none"></textarea>
                </div>
                <button className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-md transition">
                  ENVIAR MENSAJE
                </button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-3">Información de contacto</h3>
                <div className="space-y-2">
                  <p><span className="font-semibold">Email:</span> torneos@mortalkombat-championship.com</p>
                  <p><span className="font-semibold">Teléfono:</span> +1 555-123-4567</p>
                  <p><span className="font-semibold">Dirección:</span> Arena de Combate, Calle Principal #123, Ciudad</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Mortal Kombat Championship Manager. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-400">Mortal Kombat es una marca registrada de Warner Bros. Entertainment Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default MortalKombatTournament;