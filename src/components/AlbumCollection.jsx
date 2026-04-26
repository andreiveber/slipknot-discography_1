import { useState } from 'react';
import AlbumCard from './AlbumCard';
import SongList from './SongList';

const albums = [
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

function AlbumCollection() {
    const [selectedAlbum, setSelectedAlbum] = useState(null);

    const handleAlbumClick = (album) => {
        setSelectedAlbum(album);
    };

    const handleCloseModal = () => {
        setSelectedAlbum(null);
    };

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {albums.map((album) => (
                    <AlbumCard
                        key={album.id}
                        album={album}
                        onAlbumClick={handleAlbumClick}
                    />
                ))}
            </div>

            {selectedAlbum && (
                <SongList
                    album={selectedAlbum}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
}

export default AlbumCollection;