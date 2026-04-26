import AlbumCollection from './AlbumCollection';

function Main() {
    return (
        <main className="flex-grow-1">
            <div className="container py-5">
                <h2 className="text-center mb-5">Альбомы</h2>
                <AlbumCollection />
            </div>
        </main>
    );
}

export default Main;