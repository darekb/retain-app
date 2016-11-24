import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { StoreHelper } from  './store-helper';
import 'rxjs/Rx';

@Injectable()
export class NoteService {

  path: string = '/notes';
  constructor(private storeHelper: StoreHelper,  private apiService: ApiService) {}

  createNote(note) {
    return this.apiService.post(this.path, note)
    .do(savedNote => this.storeHelper.add('notes', savedNote));
  }

  getNotes() {
    return this.apiService.get(this.path)
    .do((res:any) => this.storeHelper.update('notes', res.data));
  }

  completeNote(note) {
    return this.apiService.delete(`${this.path}/${note.id}`)
    .do((res:any) => this.storeHelper.findAndDelete('notes', res.id));
  }
}
