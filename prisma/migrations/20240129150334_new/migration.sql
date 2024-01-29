-- CreateTable
CREATE TABLE "Artists" (
    "id" TEXT NOT NULL,
    "english_artist_name" TEXT NOT NULL,
    "persian_artist_name" TEXT NOT NULL,

    CONSTRAINT "Artists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genres" (
    "id" TEXT NOT NULL,
    "english_genre_name" TEXT NOT NULL,
    "persian_genre_name" TEXT NOT NULL,

    CONSTRAINT "Genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Musics" (
    "id" TEXT NOT NULL,
    "english_music_name" TEXT NOT NULL,
    "music_genre_id" TEXT NOT NULL,
    "persian_music_name" TEXT NOT NULL,
    "music_artist_id" TEXT NOT NULL,

    CONSTRAINT "Musics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ArtistsToGenres" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ArtistsToGenres_AB_unique" ON "_ArtistsToGenres"("A", "B");

-- CreateIndex
CREATE INDEX "_ArtistsToGenres_B_index" ON "_ArtistsToGenres"("B");

-- AddForeignKey
ALTER TABLE "Musics" ADD CONSTRAINT "Musics_music_genre_id_fkey" FOREIGN KEY ("music_genre_id") REFERENCES "Genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Musics" ADD CONSTRAINT "Musics_music_artist_id_fkey" FOREIGN KEY ("music_artist_id") REFERENCES "Artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistsToGenres" ADD CONSTRAINT "_ArtistsToGenres_A_fkey" FOREIGN KEY ("A") REFERENCES "Artists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistsToGenres" ADD CONSTRAINT "_ArtistsToGenres_B_fkey" FOREIGN KEY ("B") REFERENCES "Genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;
