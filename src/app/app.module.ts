import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { BookmarkTileComponent } from './bookmark-tile/bookmark-tile.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { FormsModule } from '@angular/forms';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { ManageBookmarksComponent } from './manage-bookmarks/manage-bookmarks.component';
import { EditBookmarkComponent } from './edit-bookmark/edit-bookmark.component';
import { NotificationComponent } from './notification/notification.component';
import { MoreTabComponent } from './more-tab/more-tab.component';
import { MoreTileComponent } from './more-tile/more-tile.component';
import { StarwarsComponent } from './starwars/starwars.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { ActorService } from './shared/actors.service';
import { HttpClientModule } from '@angular/common/http';
import { CharactersSingleComponent } from './characters-single/characters-single.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './shared/movie.service';
import { MovieSingleComponent } from './movie-single/movie-single.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    AddNoteComponent,
    NoteCardComponent,
    EditNoteComponent,
    TodoItemComponent,
    AddTodoComponent,
    EditTodoComponent,
    AddBookmarkComponent,
    ManageBookmarksComponent,
    EditBookmarkComponent,
    NotificationComponent,
    MoreTabComponent,
    MoreTileComponent,
    StarwarsComponent,
    CharactersListComponent,
    CharactersSingleComponent,
    MovieListComponent,
    MovieSingleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ActorService, MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
