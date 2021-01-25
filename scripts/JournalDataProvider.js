/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "01/22/2021",
        concept: "Fetching",
        entry: "We talked about API's and fetching and .then... my brain is dead, but glad i saw it in prework before now",
        mood: "Ok"
    },
    {
        id: 3,
        date: "01/20/2021",
        concept: "Countries Group Project",
        entry: "My group project went better this time around, but I seriously hate talking in front of everyone",
        mood: "Happy"
    },
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}