# Mortal Kombat Championship Manager

Sistema de administración de campeonatos para el juego Mortal Kombat. Esta aplicación web permite gestionar torneos, inscripciones y pagos mediante transferencia bancaria.

## Características

- Diseño moderno y temático inspirado en Mortal Kombat
- Gestión de torneos y campeonatos
- Sistema de inscripción mediante transferencia bancaria
- Reglas del torneo
- Formulario de contacto

## Tecnologías utilizadas

- React.js
- Tailwind CSS

## Instalación

1. Clona este repositorio:
```
git clone https://github.com/tu-usuario/mortal-kombat-tournament.git
```

2. Navega al directorio del proyecto:
```
cd mortal-kombat-tournament
```

3. Instala las dependencias:
```
npm install
```

4. Inicia el servidor de desarrollo:
```
npm start
```

5. Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en tu navegador.

## Personalización

- Los torneos de ejemplo se encuentran en el array `tournaments` dentro del componente `MortalKombatTournament.jsx`
- Las reglas del torneo están en el array `rules` del mismo componente
- Para modificar la información de pago, actualiza la propiedad `paymentInfo` de cada torneo

## Despliegue

Para construir la versión de producción:
```
npm run build
```

## Licencia

MIT

---

*Nota: Mortal Kombat es una marca registrada de Warner Bros. Entertainment Inc. Este proyecto no está afiliado oficialmente con Warner Bros.*
