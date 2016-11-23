import { Component } from '@angular/core';

@Component({
	selector: 'notes-container',
	styles: [`
    .notes {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
    }
	`],
	template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <h3>Testing notes</h3>
        <p>Just for fun</p>
      </div>
      <div class="notes col-xs-8" *ngFor='let notes of notesArray'>
        <div class="row between-xs" >
          <note-card class="col-xs-4" [note]="note" *ngFor='let note of notes'>
          </note-card>
        </div>
      </div>
    </div>
	`
})
export class NotesContainer {
  notesArray = [[{
    title: 'this is note',
    value: 'eat some food'
  },{
    title: 'Some other title',
    value: 'and sleep well'
  },{
    title: 'Some other title',
    value: 'and sleep well'
  }],[{
    title: 'this is note',
    value: 'eat some food'
  },{
    title: 'Some other title',
    value: 'and sleep well'
  },{
    title: 'Some other title',
    value: 'and sleep well'
  }],[{
    title: 'this is note',
    value: 'eat some food'
  },{
    title: 'Some other title',
    value: 'and sleep well'
  },{
    title: 'Some other title',
    value: 'and sleep well'
  }]]
}