import { useState } from 'react';
import AlbumCard from './AlbumCard';
import SongList from './SongList';
import { FaRegSave } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoAddOutline } from "react-icons/io5";

const initialAlbums = [
    {
        id: 1,
        title: "Slipknot",
        year: 1999,
        image: "/albums/slipknot.jpg",
        songs: [
            "742617000027",
            "(sic)",
            "Eyeless",
            "Wait and Bleed",
            "Surfacing",
            "Spit It Out",
            "Tattered & Torn",
            "Frail Limb Nursery",
            "Purity",
            "Liberate",
            "Prosthetics",
            "No Life",
            "Diluted",
            "Only One",
            "Scissors",
            "Eeyore"
        ]
    },
    {
        id: 2,
        title: "Iowa",
        year: 2001,
        image: "/albums/iowa.jpg",
        songs: [
            "(515)",
            "People = Shit",
            "Disasterpiece",
            "My Plague",
            "Everything Ends",
            "The Heretic Anthem",
            "Gently",
            "Left Behind",
            "The Shape",
            "I Am Hated",
            "Skin Ticket",
            "New Abortion",
            "Metabolic",
            "Iowa"
        ]
    },
    {
        id: 3,
        title: "Vol. 3: (The Subliminal Verses)",
        year: 2004,
        image: "/albums/vol3.jpg",
        songs: [
            "Prelude 3.0",
            "The Blister Exists",
            "Three Nil",
            "Duality",
            "Opium of the People",
            "Circle",
            "Welcome",
            "Vermilion",
            "Pulse of the Maggots",
            "Before I Forget",
            "Vermilion Pt. 2",
            "The Nameless",
            "The Virus of Life",
            "Danger - Keep Away"
        ]
    },
    {
        id: 4,
        title: "All Hope Is Gone",
        year: 2008,
        image: "/albums/all_hope_is_gone.jpg",
        songs: [
            "Execute",
            "Gematria (The Killing Name)",
            "Sulfur",
            "Psychosocial",
            "Dead Memories",
            "Vendetta",
            "Butcher's Hook",
            "Gehenna",
            "This Cold Black",
            "Wherein Lies Continue",
            "Snuff",
            "All Hope Is Gone"
        ]
    },
    {
        id: 5,
        title: ".5: The Gray Chapter",
        year: 2014,
        image: "/albums/gray_chapter.jpg",
        songs: [
            "XIX",
            "Sarcastrophe",
            "AOV",
            "The Devil in I",
            "Killpop",
            "Skeptic",
            "Lech",
            "Goodbye",
            "Nomadic",
            "The One That Kills the Least",
            "Custer",
            "Be Prepared for Hell",
            "The Negative One",
            "If Rain Is What You Want"
        ]
    },
    {
        id: 6,
        title: "We Are Not Your Kind",
        year: 2019,
        image: "/albums/we_are_not_your_kind.jpg",
        songs: [
            "Insert Coin",
            "Unsainted",
            "Birth of the Cruel",
            "Death Because of Death",
            "Nero Forte",
            "Critical Darling",
            "A Liar's Funeral",
            "Red Flag",
            "What's Next",
            "Spiders",
            "Orphan",
            "My Pain",
            "Not Long for This World",
            "Solway Firth"
        ]
    }
];

const getNextId = (albumsArray) => {
    const maxId = albumsArray.reduce((max, album) => Math.max(max, album.id), 0);
    return maxId + 1;
};

function AlbumCollection() {
    const [albums, setAlbums] = useState(initialAlbums);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newYear, setNewYear] = useState('');
    const [newSongs, setNewSongs] = useState('');

    const deleteAlbum = (id) => {
        setAlbums(albums.filter(album => album.id !== id));
    };

    const handleAlbumClick = (album) => setSelectedAlbum(album);
    const handleCloseModal = () => setSelectedAlbum(null);

    const toggleListened = (id) => {
        setAlbums(albums.map(album =>
            album.id === id ? { ...album, isListened: !album.isListened } : album
        ));
    };

    const addAlbum = (e) => {
        e.preventDefault();
        if (!newTitle.trim() || !newYear) return;

        const songsArray = newSongs.split(',').map(s => s.trim()).filter(s => s);
        const newId = Math.max(...albums.map(a => a.id), 0) + 1;

        const newAlbum = {
            id: newId,
            title: newTitle.trim(),
            year: parseInt(newYear, 10),
            image: '/test-album.png',
            songs: songsArray.length ? songsArray : ['Нет песен'],
            isListened: false
        };

        setAlbums([newAlbum, ...albums]);
        setNewTitle('');
        setNewYear('');
        setNewSongs('');
        setShowForm(false);
    };

    return (
        <>
            <div className="text-center mb-4">
                <button
                    className="btn btn-success btn-lg"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? <RxCross1 className="me-1" /> : <IoAddOutline className="me-1" />}
                    {showForm ? ' Отменить' : ' Добавить альбом'}
                </button>
            </div>

            {showForm && (
                <div className="card mb-5 p-3 bg-dark text-white">
                    <h4 className="mb-3">Добавить новый альбом</h4>
                    <form onSubmit={addAlbum}>
                        <div className="mb-3">
                            <label className="form-label">Название альбома</label>
                            <input
                                type="text"
                                className="form-control"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Год выпуска</label>
                            <input
                                type="number"
                                className="form-control"
                                value={newYear}
                                onChange={(e) => setNewYear(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Список песен (через запятую)</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                value={newSongs}
                                onChange={(e) => setNewSongs(e.target.value)}
                                placeholder="Например: Песня 1, Песня 2"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            <FaRegSave className="me-1" /> Сохранить альбом
                        </button>
                    </form>
                </div>
            )}

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {albums.map((album) => (
                    <AlbumCard
                        key={album.id}
                        album={album}
                        onAlbumClick={handleAlbumClick}
                        onDelete={deleteAlbum}
                        onToggleListened={toggleListened}
                    />
                ))}
            </div>

            {selectedAlbum && <SongList album={selectedAlbum} onClose={handleCloseModal} />}
        </>
    );
}

export default AlbumCollection;