/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p class="journalEntry__name">${entry.name}</p>
            <p class="journalEntry__text">${entry.text}</p>
            <p class="journalEntry__date">${entry.date}</p>  
        </section>
        `
        }

        // Display the entry's full text, and the date
        //     it was entered here.