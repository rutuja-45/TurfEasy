function renderTurfs(turfs) {
    grid.innerHTML = turfs.map(turf => `
        <div class="turf-card">
            <h3>${turf.name}</h3>
            <p>${turf.location}</p>
        </div>
    `).join('');
}
