
import { useRouter } from "next/router.js";
import ArtPieceDetails from "@/components/ArtPieceDetails";

const mockArtPieces = [
    {
        "slug": "silhouette-of-trees",
        "artist": "Min An",
        "name": "Silhouette Photo of Trees",
        "imageSource": "https://example-apis.vercel.app/assets/art/silhouette-trees.jpg",
        "year": "2017",
        "genre": "Nature",
        "colors": [
          "#f1f3f4",
          "#161718",
          "#979898",
          "#7c7c7c",
          "#7c747c"
        ],
        "dimensions": {
          "height": 1278,
          "width": 1920,
          "type": "jpg"
        }
      },
      {
        "slug": "split-shot-of-whale",
        "artist": "Elianne Dipp",
        "name": "Split Shot of Whale",
        "imageSource": "https://example-apis.vercel.app/assets/art/split-shot-of-whale.jpg",
        "year": "2016",
        "genre": "Nature",
        "colors": [
          "#bccbd5",
          "#13517b",
          "#80acc5",
          "#78a2c4",
          "#081931"
        ],
        "dimensions": {
          "height": 2875,
          "width": 1920,
          "type": "jpg"
        }
      },
      {
        "slug": "body-of-water",
        "artist": "Jeremy Bishop",
        "name": "Body of Water",
        "imageSource": "https://example-apis.vercel.app/assets/art/body-of-water.jpg",
        "year": "2017",
        "genre": "Nature",
        "colors": [
          "#203f4a",
          "#9ca1a5",
          "#2d738d",
          "#3a8bb1",
          "#74a5bf"
        ],
        "dimensions": {
          "height": 2880,
          "width": 1920,
          "type": "jpg"
        }
      }
  ];
  
export default function ArtPieceDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isReady) {
    return <p>Loading...</p>;
  }

  const artPiece = mockArtPieces.find(piece => piece.slug === slug);

  if (!artPiece) {
    return <p>No art piece found</p>;
  }

  return (
   
        <ArtPieceDetails 
            image={artPiece.imageSource} 
            name={artPiece.name} 
            artist={artPiece.artist} 
            year={artPiece.year} 
            genre={artPiece.genre} 
            onBack={() => router.back()}
        />    
    );
}


