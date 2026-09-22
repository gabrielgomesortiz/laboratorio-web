import { Routes, Route } from 'react-router-dom';

import Index from '../pages/index';
import Game from '../pages/game';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/jogo/:partidaId" element={<Game />} />
        </Routes>
    );
}