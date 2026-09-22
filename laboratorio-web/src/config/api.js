export const API_BASE_URL =
    import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const API_ROUTES = {
    health: `${API_BASE_URL}/health`,
    jogadores: `${API_BASE_URL}/jogadores`,
    partidas: `${API_BASE_URL}/partidas`,
    enigmas: `${API_BASE_URL}/enigmas`,
    ranking: `${API_BASE_URL}/ranking`,
};