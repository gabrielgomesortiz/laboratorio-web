import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from '../pages/index';
import Salas from '../pages/game/index';
import Room from '../pages/game/room/room';
import Final from '../pages/game/final';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/jogo/:partidaId" element={<Salas />} />
                <Route path="/jogo/:partidaId/sala/:numeroSala" element={<Room />} />
                {/* Adicione a rota final aqui embaixo */}
                <Route path="/jogo/:partidaId/final" element={<Final />} />
            </Routes>
        </BrowserRouter>
    );
}