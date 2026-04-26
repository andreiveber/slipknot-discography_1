function AlbumCard({ album, onAlbumClick }) {
    return (
        <div className="col">
            <div className="card h-100 shadow-sm">
                <div
                    style={{
                        aspectRatio: '1 / 1',
                        backgroundImage: `url(${album.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: '#1a1a1a'
                    }}
                />
                <div className="card-body">
                    <h5 className="card-title">{album.title}</h5>
                    <p className="card-text">
                        <strong>Год выпуска:</strong> {album.year}
                    </p>
                    <p className="card-text">
                        <strong>Песни:</strong> {album.songs.length}
                    </p>
                    <button
                        className="btn btn-danger w-100"
                        onClick={() => onAlbumClick(album)}
                    >
                        Список песен
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AlbumCard;