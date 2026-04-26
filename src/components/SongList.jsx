function SongList({ album, onClose }) {
    if (!album) return null;

    return (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-dark text-white">
                        <h5 className="modal-title">{album.title} ({album.year})</h5>
                        <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <ul className="list-group">
                            {album.songs.map((song, index) => (
                                <li key={index} className="list-group-item">
                                    {index + 1}. {song}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SongList;