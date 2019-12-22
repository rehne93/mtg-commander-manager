import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckstatsApiService {

  readonly DECKSTATS_URL = 'https://deckstats.net/api.php?action=get_deck&id_type=saved&owner_id=OWNERID&id=DECKID&response_type=list';
  readonly OWNER_ID = 'OWNERID';
  readonly DECK_ID = 'DECKID';
  readonly COMMANDER = '!Commander';

  readonly TESTURL = 'https://deckstats.net/decks/127369/1499440-in-the-spirit-of-kamigawa';
  constructor(private http: HttpClient) { }



  /**
   * Lädt eine komplette Deckliste zu einer URL herunter.
   * Gibt das passende Observable zurück.
   * @param url
   */
  public getDeck(url: string): Observable<object> {
    let ownerId = null;
    let deckId = null;
    try {
       ownerId = this.parseOwnerId(url);
       deckId = this.parseDeckId(url);
    } catch (ex) {
      alert('Fehler: Falsche Deckstats URL angegeben');
    }
    if (deckId && ownerId) {
      const fullUrl = this.DECKSTATS_URL.replace(this.OWNER_ID, ownerId).replace(this.DECK_ID, deckId);
      return this.http.get<object>(fullUrl);
    }
    return null;
  }

  /**
   * Liest den Commander aus der Deckliste aus.
   * Erkennbar am Flag !Commander
   * TODO: Zahl vorher entfernen
   */
  public parseCommander(list: string): string {
      const splitted = list.split('\n');
      for (const line of splitted) {
        if (line.indexOf(this.COMMANDER) !== -1) {
            return line.split('#')[0];
        }
      }
      return '';
  }


  /**
   *
   * OWNER-ID ist nach dem 4 Slash
   * <-> entspricht 4tem Array Element
   * @param url in der die OwnerID steht
   */
  private parseOwnerId(url: string): string {
      const splitted = url.split('/');
      return splitted[4];
  }

  /**
   * Deck-ID ist nach dem 5ten Slash
   * <-> entspricht 5tem Element
   * Zusätzlich muss alles nach den Zahlen
   * abgeschnintten werden
   * @param url in der die DeckID steht
   */
  private parseDeckId(url: string): string{
      const splitted = url.split('/');
      const deck = splitted[5];
      const deckSplitted = deck.split('-');
      return deckSplitted[0];
  }


}
