import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersSingleComponent } from './characters-single/characters-single.component';
import { EditBookmarkComponent } from './edit-bookmark/edit-bookmark.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ManageBookmarksComponent } from './manage-bookmarks/manage-bookmarks.component';
import { MoreTabComponent } from './more-tab/more-tab.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSingleComponent } from './movie-single/movie-single.component';
import { NotesComponent } from './notes/notes.component';
import { StarwarsComponent } from './starwars/starwars.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { tab: 1 } },
  { path: 'bookmarks/add', component: AddBookmarkComponent },
  {
    path: 'bookmarks/manage',
    component: ManageBookmarksComponent,
    children: [{ path: ':id', component: EditBookmarkComponent }],
  },
  { path: 'todos', component: TodosComponent, data: { tab: 2 } },
  { path: 'todos/add', component: AddTodoComponent },
  { path: 'todos/:id', component: EditTodoComponent },
  { path: 'notes', component: NotesComponent, data: { tab: 3 } },
  { path: 'notes/add', component: AddNoteComponent },
  { path: 'notes/:id', component: EditNoteComponent },
  { path: 'mores', component: MoreTabComponent, data: { tab: 4 } },
  {
    path: 'mores/starwarscollection',
    component: StarwarsComponent,
    children: [
      { path: 'characters', component: CharactersListComponent },
      { path: 'characters/:actorname', component: CharactersSingleComponent },
      { path: 'movies', component: MovieListComponent },
      { path: 'movies/:moviename', component: MovieSingleComponent },
    ],
  },
  // { path: 'mores/calculator', component: CalculatorComponent },
  // { path: 'mores/stopwatch', component: StopwatchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
