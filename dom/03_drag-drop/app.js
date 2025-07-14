document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const draggable = document.getElementById('draggable');

    // Drag events
    draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        e.target.classList.add('dragging');
    });

    draggable.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });

    // Drop zone events
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('highlight');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('highlight');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('highlight');
        
        const id = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(id);
        
        if (draggedElement && !dropZone.contains(draggedElement)) {
            dropZone.appendChild(draggedElement);
        }
    });
});