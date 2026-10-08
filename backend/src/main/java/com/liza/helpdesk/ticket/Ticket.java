package com.liza.helpdesk.ticket;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
@Table(name = "tickets")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    private String titre;

    @Column(length = 2000)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TicketStatus statut = TicketStatus.OUVERT;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TicketPriority priorite = TicketPriority.MOYENNE;

    @Column(nullable = false, updatable = false)
    private LocalDateTime dateCreation;

    @PrePersist
    void onCreate() {
        this.dateCreation = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitre() { return titre; }
    public void setTitre(String titre) { this.titre = titre; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public TicketStatus getStatut() { return statut; }
    public void setStatut(TicketStatus statut) { this.statut = statut; }

    public TicketPriority getPriorite() { return priorite; }
    public void setPriorite(TicketPriority priorite) { this.priorite = priorite; }

    public LocalDateTime getDateCreation() { return dateCreation; }
}