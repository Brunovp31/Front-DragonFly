// DeliveryStatus.tsx

export type EstadoPedido = 'En proceso' | 'En camino' | 'Entregado' | 'Devuelto';

export const estadosDisponibles: EstadoPedido[] = [
  'En proceso',
  'En camino',
  'Entregado',
  'Devuelto', // Estado añadido
];
