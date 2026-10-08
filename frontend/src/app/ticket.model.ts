export type TicketStatus = 'OUVERT' | 'EN_COURS' | 'RESOLU' | 'FERME';
export type TicketPriority = 'BASSE' | 'MOYENNE' | 'HAUTE' | 'URGENTE';

export interface Ticket {
  id?: number;
  titre: string;
  description?: string;
  statut?: TicketStatus;
  priorite?: TicketPriority;
  dateCreation?: string;
}
