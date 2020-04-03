import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { ArtistsComponent } from './library/artists/artists.component';
import { AlbumsComponent } from './library/albums/albums.component';
import { TunesComponent } from './library/tunes/tunes.component';
import { PlaylistsComponent } from './favorites/playlists/playlists.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavArtistsComponent } from './favorites/fav-artists/fav-artists.component';
import { FavAlbumsComponent } from './favorites/fav-albums/fav-albums.component';
import { ProjectsComponent } from './library/projects/projects.component';
import { WatchListComponent } from './library/watch-list/watch-list.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'allsongs', component: TunesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'watchlist', component: WatchListComponent },
  //{ path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    ArtistsComponent,
    AlbumsComponent,
    TunesComponent,
    PlaylistsComponent,
    FavoritesComponent,
    FavArtistsComponent,
    FavAlbumsComponent,
    ProjectsComponent,
    WatchListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
