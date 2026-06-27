---
name: job-application-generator
description: Passt Ihren Lebenslauf an und erstellt ein passendes Anschreiben basierend auf einer Stellenbeschreibung. Verwenden Sie diesen Skill, wenn ein Benutzer eine Stellenbeschreibung bereitstellt und maßgeschneiderte Bewerbungsunterlagen generieren möchte.
---

# Job Application Generator

Dieser Skill automatisiert den Prozess der Anpassung Ihres professionellen Lebenslaufs und des Schreibens eines aussagekräftigen Anschreibens für eine spezifische Stellenausschreibung.

## Workflow

Wenn Sie eine Stellenbeschreibung vom Benutzer erhalten, folgen Sie diesen Schritten:

### 1. Vorbereitung
Identifizieren Sie den Firmennamen aus der Stellenbeschreibung. Falls dieser nicht klar angegeben ist, fragen Sie den Benutzer oder verwenden Sie einen Platzhalter.

### 2. Lebenslauf anpassen
- **Quelle:** Lesen Sie den Basis-Lebenslauf aus `@index.html`.
- **Anweisung:** Verwenden Sie die Richtlinien in `references/resume_prompt.md`.
- **Aktion:** Analysieren Sie die Stellenbeschreibung im Vergleich zum Basis-Lebenslauf. Identifizieren Sie wichtige ATS-Keywords und wenden Sie die STAR-Methode an.
- **Wichtig:** Die Ausgabe muss eine wortwörtliche Kopie der `@index.html` sein, wobei nur der Textinhalt (Erfahrung, Fähigkeiten usw.) geändert wurde. Behalten Sie die gesamte HTML-Struktur, Skripte und Meta-Tags exakt so bei, wie sie in `@index.html` sind.
- **Ausgabe:** Generieren Sie den aktualisierten HTML-Code.
- **Speichern:** Speichern Sie die Datei unter `/jobs/resumes/[unternehmensname].html`.

### 3. Anschreiben generieren
- **Quelle:** Verwenden Sie den angepassten Lebenslauf (aus Schritt 2) und die ursprüngliche Stellenbeschreibung.
- **Anweisung:** Verwenden Sie die Richtlinien in `references/cover_letter_prompt.md`.
- **Aktion:** Schreiben Sie ein prägnantes Anschreiben (unter 300 Wörtern), das die VILT-Stack-Expertise hervorhebt und die drei wichtigsten Anforderungen anspricht.
- **Ausgabe:** Generieren Sie den Text des Anschreibens im Markdown-Format.
- **Speichern:** Speichern Sie die Datei unter `/jobs/cover_letters/JJJJ-MM-TT_[unternehmensname].md`.

### 4. Fortschritt verfolgen
- **Aktion:** Öffnen Sie `@jobs/job_matches.md` und suchen Sie die Zeile für das Unternehmen.
- **Aktualisierung:** Fügen Sie einen Status-Indikator (z. B. `[EINGEREICHT]`) zum "Job Title" hinzu oder hängen Sie eine neue "Status"-Spalte an, falls angemessen, um den Job als erledigt zu markieren.

### 5. Abschließende Überprüfung
Präsentieren Sie die Ergebnisse dem Benutzer:
1. Link zum neuen angepassten Lebenslauf.
2. Der vollständige Text des Anschreibens.
3. Eine kurze Strategie-Notiz, die die Auswahl bei der Anpassung erklärt.
4. Bestätigung, dass der Job in `@jobs/job_matches.md` als eingereicht markiert wurde.

## Referenzen

- [resume_prompt.md](references/resume_prompt.md): Detaillierte Anweisungen zur ATS-Optimierung und STAR-Methode.
- [cover_letter_prompt.md](references/cover_letter_prompt.md): Richtlinien für das Schreiben eines überzeugenden, nicht-roboterhaften Anschreibens.
