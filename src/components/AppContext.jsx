import React, { createContext, useContext, useState } from 'react';

// Создаем контекст
const AppContext = createContext();

// Создаем провайдер контекста
export const AppProvider = ({ children }) => {
  const [likedCats, setLikedCats] = useState([]); // Здесь храните понравившихся пользователю котов

  return (
    <AppContext.Provider value={{ likedCats, setLikedCats }}>
      {children}
    </AppContext.Provider>
  );
};

// Создаем хук для удобного использования контекста в компонентах
export const useAppContext = () => useContext(AppContext);