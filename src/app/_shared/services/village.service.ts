import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Village} from "../model/village";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VillageService implements OnInit {


  ngOnInit(): void {

  }

  constructor(private http: HttpClient) {
  }

  fetchVillage(): Observable<Village> {
    return this.http.get<Village>(`${environment.apiUrl}/villages`);
  }

}
