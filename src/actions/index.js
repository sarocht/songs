// Action creator
export const selectSong = (song) => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}

// Export default you won't need bracelets
// Export name you need curry bracelets