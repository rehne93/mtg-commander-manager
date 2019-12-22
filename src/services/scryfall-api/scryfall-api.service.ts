import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScryfallApiService {

  readonly IMAGE_URIS = 'image_uris';
  readonly NORMAL = 'normal';
  readonly SMALL = 'small';

  /* Fuzzy ist vergleichbar mit LIKE in DBs */
  readonly SCRYFALL_CARDS_URL = 'https://api.scryfall.com/cards/named?fuzzy=';

  constructor(private http: HttpClient) { }


  /**
   *
   * Lädt die URL für ein Bild zur angegebenen Karter herunter.
   * @param cardName der Name der Karte
   */
  public getImageUrl(cardName: string) {
    const url = this.SCRYFALL_CARDS_URL + encodeURIComponent(cardName);
    return new Promise((resolve) => {this.http.get(url).subscribe((result) => {
        const imageUris = result[this.IMAGE_URIS];
        const imageUrl = imageUris[this.SMALL];
        resolve(imageUrl);
    });
  });
  }
}
