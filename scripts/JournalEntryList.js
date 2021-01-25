/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

JournalEntryComponent()

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".label")

let useJournalEntries = ""
export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
       entryHTMLRepresentations += JournalEntryComponent(entries)
        entryLog.innerHTML += `
        <article class=".journalEntry">
        ${entryHTMLRepresentations}
        </article>
        `
    }
}