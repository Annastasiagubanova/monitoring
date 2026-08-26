// Логика для главной страницы (index.html)
const journalBtn = document.getElementById('journal-btn');
if (journalBtn) {
    journalBtn.addEventListener('click', function() {
        window.location.href = 'journal.html';
    });
}

const statusBtn = document.getElementById('status-btn');
if (statusBtn) {
    statusBtn.addEventListener('click', function() {
        window.location.href = 'status.html';
    });
}

const geoBtn = document.getElementById('geo-btn');
if (geoBtn) {
    geoBtn.addEventListener('click', function() {
        window.location.href = 'geo.html';
    });
}

const archiveBtn = document.getElementById('archive-btn');
if (geoBtn) {
    archiveBtn.addEventListener('click', function() {
        window.location.href = 'archive.html';
    });
}

// Логика для страницы журнала (journal.html)
const backBtn = document.getElementById('back');
if (backBtn) {
    backBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}